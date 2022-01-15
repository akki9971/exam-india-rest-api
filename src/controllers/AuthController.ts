import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository, getConnection } from 'typeorm';
import { validate } from 'class-validator';
import * as bcrypt from 'bcryptjs';

// entities
import { User } from '../entity/User';
import { Notification } from '../entity/Notification';

// services
import SMSService from '../services/SMS.service';
import UserService from '../services/User.service';
import NotificationService from '../services/Notification.service';

import config from '../config/config';
import HelperFunctions from '../helpers/HelperFunctions';

class AuthController {

  /**
   * verify mobile otp
   */
  static mobileVerify = async (req: Request, res: Response) => {
    
    // check for the required details
    let { otp, type, userId } = req.body;
    if (!(otp && userId)) {
      return res.status(400).json({
        message: 'Bad request'
      });
    }

    // check if valid otp
    const userService = UserService.getInstance();
    const user = await userService.getUserDetails([], {
      userId: userId,
      mobileOTP: otp
    });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid OTP, please check!'
      });
    }

    // mark mobile verified
    await userService.markMobileVerified(userId, true);

    // send welcome message
    SMSService.sendWelcomeMessage(user);

    // sending a generic profile completion notofication
    let notification = new Notification();
    const notificationService = NotificationService.getInstance();
    
    notification.userId = user.userId;
    notification.title = 'Please complete your profile!';
    notification.link = `/user/${user.userId}/edit/basic`;
    notification.body = `In order to apply for an exam, please complete your profile by clicking here`;
    notificationService.create(notification);

    // sing JWT, valid for 1 hour
    const token = jwt.sign(
      {
        userId: user.userId,
        username: user.username
      },
      config.jwtSecret,
      {
        expiresIn:
        config.tokenLife
      }
    );

    // unset the password
    delete user['password'];

    const nextUrl = `/user/${user.userId}/edit/basic`;

    // send the jwt in the response
    return res.json({
      message: 'Mobile verification successful!',
      token: token,
      user: user,
      nextUrl: nextUrl
    });
  }

  static forgotPasswordResendOtp = async (req: Request, res: Response) => {
    let { mobile } = req.body;
    const userRepository = getRepository(User);
    let user: User;
    try {
      let forgotPasswordRequested = true;
      user = await userRepository.findOneOrFail({
        select: [
          "userId",
          "fullName",
          "mobile",
          "mobileOTP",
          "forgotPasswordRequested"
        ],
        where: { mobile, forgotPasswordRequested }
      });

      // Send mobile verification code
      SMSService.sendOTP(user);

      res.status(200).json({
        message: "OTP has been sent successfully!"
      });
      return;
    } catch (error) {
      // TODO: handle other exceptions as well
      res.status(404).json({
        message: "User not found"
      });
      return;
    }
  };

  static forgotPasswordNewPassword = async (req: Request, res: Response) => {
    // get required details
    let { otp, mobile, newPassword } = req.body;
    let mobileOTP = otp;
    let forgotPasswordRequested = true;

    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({
        select: [
          "userId",
          "fullName",
          "mobile",
          "mobileOTP",
          "forgotPasswordRequested"
        ],
        where: { mobile, mobileOTP, forgotPasswordRequested }
      });
      // console.log('user', user);
    } catch (error) {
      // TODO: handle other exceptions as well
      res.status(401).json({
        message: "Invalid OTP, please check"
      });
      return;
    }

    // update user as forgotPasswordRequested = false
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({
        mobileOTP: "",
        forgotPasswordRequested: false,
        password: bcrypt.hashSync(newPassword, 8)
      })
      .where("mobile = :mobile", { mobile: mobile })
      .where("mobileOTP = :mobileOTP", { mobileOTP: mobileOTP })
      .execute();

    // send success response
    res.status(200).json({
      message: "Password update successful, please login with new password"
    });

    return true;
  };

  static forgotPasswordMobileVerify = async (req: Request, res: Response) => {
    // check for the required details
    let { otp, mobile } = req.body;
    if (!(otp && mobile)) {
      res.status(400).json({
        message: "Bad request"
      });
    }

    let forgotPasswordRequested = true;
    let mobileOTP = otp;

    // get user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({
        select: [
          "userId",
          "fullName",
          "mobile",
          "mobileOTP",
          "forgotPasswordRequested"
        ],
        where: { mobile, mobileOTP, forgotPasswordRequested }
      });
    } catch (error) {
      // TODO: handle other exceptions as well
      res.status(401).json({
        message: "Invalid OTP, please check"
      });
      return;
    }

    // send success response
    res.json({
      message: "OTP verification is successful!"
    });
  };

  static forgotPasswordMobile = async (req: Request, res: Response) => {
    let { mobile } = req.body;
    //Get user from database
    const userRepository = getRepository(User);
    let user: User;

    user = await userRepository.findOne({
      select: ["mobile", "fullName"],
      where: { mobile }
    });
    if (user) {
      let resetOTP = HelperFunctions.getRandomInt(999, 9999); // 4 digit otp

      await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({
          mobileOTP: resetOTP,
          forgotPasswordRequested: true
        })
        .where("mobile = :mobile", { mobile: mobile })
        .execute();

        
      // Send mobile verification code
      user.mobileOTP = resetOTP;
      SMSService.sendOTP(user);

      res.status(200).json({
        message: "OTP has been sent on the registered mobile number!"
      });
    } else {
      res.status(400).json({
        message: "User with this mobile number does not exist"
      });
    }
    return;
  };

  static emailVerify = async (req: Request, res: Response) => {
    // TODO: Send Email verification link here
  };

  static login = async (req: Request, res: Response) => {
    //Check if mobile and password are set
    let { mobile, password } = req.body;
    if (!(mobile && password)) {
      res.status(400).json({
        message: "Bad request"
      });
    }

    //Get user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({
        select: [
          "userId",
          "username",
          "role",
          "fullName",
          "mobile",
          "email",
          "dateOfBirth",
          "password",
          "mobileVerified",
          "mobileOTP",
          "profileImage",
          "instituteId"
        ],
        where: { mobile }
      });
    } catch (error) {
      res.status(404).json({
        message: "User not found"
      });
      return;
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).json({
        message: "Mobile or Password is wrong"
      });
      return;
    }

    // check if user has verified the mobile number
    if (!user.mobileVerified) {
      // Send mobile verification code
      SMSService.sendOTP(user);

      // remove sensitive info
      // delete user["mobileVerified"];
      user = HelperFunctions.removeObjectKeys(user, ['password', 'createdAt', 'dateOfBirth', 'emailVerified', 'mobileOTP', 'updatedAt']);

      // modify mobile number
      user["mobile"] = `*******${user.mobile.slice(7)}`;

      res.status(401).json({
        user: user,
        error: 'mobileNotVerified',
        message: 'Mobile number is not yet verified'
      });
      return;
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.userId, username: user.username },
      config.jwtSecret,
      { expiresIn: config.tokenLife }
    );

    // unset the password
    user = HelperFunctions.removeObjectKeys(user, ['password', 'mobileOTP']);

    //Send the jwt in the response
    res.status(200).json({
      message: "Login successful!",
      token: token,
      user: user
    });
  };

  static changePassword = async (req: Request, res: Response) => {
    // fetch userId
    const userId = res.locals.jwtPayload.userId;

    // get passwords
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      return res.status(400).json({
        status: 'error',
        message: "Bad request"
      });
    }

    // get user from the database
    const userRepository = getRepository(User);
    let user: User;

    try {
      user = await userRepository.findOneOrFail(userId);
    } catch (e) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    // check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      return res.status(401).json({
        status: 'error',
        message: 'Incorrect old password'
      });
    }

    // validate model (password length)
    user.password = newPassword;
    const errors = await validate(user);
    if (errors.length > 0) {
      // console.log(errors);
      return res.status(400).send(errors);
    }

    // encrypt the new password and save
    user.hashPassword();
    userRepository.save(user);

    return res.status(200).json({
      status: 'success',
      message: 'Password changed successfully, please login with your new password!'
    });
  }
}

export default AuthController;
