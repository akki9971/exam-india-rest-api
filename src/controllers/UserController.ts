
import { Request, Response } from "express";
import { getRepository, getConnection, Not } from "typeorm";
import { validate } from "class-validator";
import { MoreThan, LessThan, Between } from "typeorm";
// entities
import { User } from '../entity/User';
import { Address } from '../entity/Address';
import { Notification } from '../entity/Notification';
import { Scholarship } from '../entity/Scholarship';

// services
import SMSService from '../services/SMS.service';
import UserService from '../services/User.service';
import NotificationService from '../services/Notification.service';

// controller
import NotificationController from './NotificationController';

import HelperFunctions from '../helpers/HelperFunctions';
import config from '../config/config';
import ExamService from "../services/Exam.service";

class UserController {

  /**
   * create a new user
   */
  static createUser = async (req: Request, res: Response) => {
    let {
      fullName,
      mobile,
      email,
      password,
      institute
    } = req.body;

    let user = new User();
    user.fullName = fullName;
    user.mobile = mobile;
    user.email = email;
    user.password = password;
    user.role = config.roles.student;
    user.instituteId = institute.instituteId;

    // hash the password, to securely store on DB
    user.hashPassword();

    // check if phone number is already registered
    const userService = UserService.getInstance();
    const mobileExist = await userService.mobileExist(user.mobile);
    if (mobileExist) {
      return res.status(400).json({
        message: 'This number has already registered, please choose different mobile number'
      });
    }

    // generating 4 digit mobile verification code
    user.mobileOTP = HelperFunctions.getRandomInt(999, 9999);

    // save user
    await userService.save(user);

    // send mobile verification OTP
    SMSService.sendOTP(user);

    // remove sensitive info
    delete user['mobileVerified'];
    user = HelperFunctions.removeObjectKeys(user, ['password', 'createdAt', 'dateOfBirth', 'email', 'emailVerified', 'mobileOTP', 'updatedAt']);

    // modify mobile number
    user['mobile'] = `*******${user.mobile.slice(7)}`;

    // set welcome notification
    let notification = new Notification();
    notification.userId = user.userId;
    notification.title = 'Welcome!';
    notification.body = `You're successfully registered on www.examin.com`;

    const notificationService = NotificationService.getInstance();
    notificationService.create(notification);

    // if all ok, send 201 response
    return res.status(201).json({
      message: 'Registration successful!',
      user: user
    });
  }

  /**
   * get user by userId
   */
  static getUserByUserId = async (req: Request, res: Response) => {

    // fetch user id
    const userId = req.params.userId;

    // get user details
    const userService = UserService.getInstance();
    let user = await userService.getUserDetails(
      [
        'userId',
        'instituteId',
        'gender',
        'fullName',
        'fathersName',
        'mothersName',
        'dateOfBirth',
        'email',
        'mobile',
        'role',
        'caste',
        'religion',
        'profileImage',
        'parentsNumber',
        'aadhaarNumber'
      ],
      { userId: userId }
    );

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    // check if address has filled
    let address = await userService.getUserAddress(
      ['addressLine1', /*'addressLine2',*/ 'cityVillageTown', 'district', 'pincode', 'state', 'country'],
      { entityType: 'user', entityId: userId }
    );

    // check if address has filled
    let secondaryAddress = await userService.getUserAddress(
      ['addressLine1', /*'addressLine2',*/ 'cityVillageTown', 'district', 'pincode', 'state', 'country'],
      { entityType: 'user:secondary', entityId: userId }
    );

    // update address status
    user = {
      ...user,
      address: false,
      secondaryAddress: false,
      profileCompleted: false
    };

    if (address) { user.address = address };
    if (secondaryAddress) { user.secondaryAddress = secondaryAddress };

    if ((!HelperFunctions.hasEmptyValues(user)) && (!HelperFunctions.hasEmptyValues(address))) {
      user.profileCompleted = true;
    }

    return res.status(200).json({
      status: 'success',
      user: user
    });
  };

  /**
   * udpate user by userId
   */
  static updateUserByUserId = async (req: Request, res: Response) => {

    // fetch userId
    const { userId } = req.body.user;

    // fetch information
    const {
      fullName,
      fathersName,
      mothersName,
      email,
      dateOfBirth,
      username,
      gender,
      bio,
      religion,
      caste,
      parentsNumber,
      aadhaarNumber
    } = req.body;

    const userService = UserService.getInstance();
    const user = await userService.getUserDetails([], { userId: userId });

    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'User does not exist!'
      });
    }

    // update details
    user.fullName = fullName;
    user.fathersName = fathersName;
    user.mothersName = mothersName;
    // user.mobile = mobile;
    user.email = email;
    user.dateOfBirth = dateOfBirth;
    user.username = username;
    user.gender = gender;
    user.bio = bio;
    user.religion = religion;
    user.caste = caste;
    user.parentsNumber = parentsNumber;
    user.aadhaarNumber = aadhaarNumber;

    // save updated details
    const userSaved = userService.save(user);
    if (!userSaved) {
      return res.status(401).json({
        status: 'error',
        message: 'Unable to update user details!'
      });
    }

    let address: Address;

    // check if address exist
    const addressFound = await userService.getAddress([], {
      entityType: 'user',
      entityId: user.userId
    });

    if (addressFound) {
      address = addressFound;
    } else {
      address = new Address();
      address.entityType = 'user';
      address.entityId = user.userId;
    }

    const {
      addressLine1,
      addressLine2,
      cityVillageTown,
      state,
      district,
      pincode,
      country,
    } = req.body.address;

    address.addressLine1 = addressLine1;
    address.addressLine2 = addressLine2;
    address.cityVillageTown = cityVillageTown;
    address.state = state;
    address.district = district;
    address.pincode = pincode;
    address.country = country;

    // save address
    const addressSaved = await userService.saveAddress(address);

    let secondaryAddress: Address;

    // check if address exist
    const secondaryAddressFound = await userService.getAddress([], {
      entityType: 'user:secondary',
      entityId: user.userId
    });

    if (secondaryAddressFound) {
      secondaryAddress = secondaryAddressFound;
    } else {
      secondaryAddress = new Address();
      secondaryAddress.entityType = 'user:secondary';
      secondaryAddress.entityId = user.userId;
    }

    secondaryAddress.addressLine1 = req.body.secondaryAddress.addressLine1;
    secondaryAddress.addressLine2 = req.body.secondaryAddress.addressLine2;
    secondaryAddress.cityVillageTown = req.body.secondaryAddress.cityVillageTown;
    secondaryAddress.state = req.body.secondaryAddress.state;
    secondaryAddress.district = req.body.secondaryAddress.district;
    secondaryAddress.pincode = req.body.secondaryAddress.pincode;
    secondaryAddress.country = req.body.secondaryAddress.country;

    // save address
    const secondaryAddressSaved = await userService.saveAddress(secondaryAddress);

    // // check for the institute
    // const userInstitute = await userService.getUserInstitute(userId);
    // let nextUrl;

    // // set eScholarship notification if enrolled
    // if (userInstitute && userInstitute.uniqueName === 'scholarship') {
    //   nextUrl = `/user/${user.userId}/edit/scholarship`;
    // }

    //After all send a 204 (no content, but accepted) response
    return res.status(200).json({
      user: user,
      // nextUrl: nextUrl,
      message: 'Profile updated successfully'
    });
  }

  /**
   * update user institute by user id
   * @param req 
   * @param res 
   */
  static updateInstituteByUserId = async (req: Request, res: Response) => {

    // fetch userId and instituteId
    const { userId } = req.body.user;
    const { instituteId } = req.body;

    const userService = UserService.getInstance();
    const user = await userService.getUserDetails(['dateOfBirth', 'email', 'fullName', 'instituteId', 'mobile', 'mobileVerified', 'profileImage', 'role', 'userId', 'username'], { userId: userId });

    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'User does not exist!'
      });
    }
    // save instituteId to user entity
    user.instituteId = instituteId;
    const saved = await userService.save(user);
    return res.status(201).json({
      user: user,
      status: 'success',
      message: 'User institute has been updated!'
    });
  }

  /**
   * get the list of all users except admin (moderator optional)
   */
  static getUsers = async (req: Request, res: Response) => {

    // fetch params
    const { limit, offset, examId, instituteId, payment_status, registerd_from, registerd_to } = req.query;

    // pagination params
    const pagination = { limit: 12, offset: 0 };

    // update pagination attrs
    if (limit) { pagination.limit };
    if (offset) { pagination.offset };

    // where conditions
    let whereCondictions = {};

    // skip admin user
    whereCondictions = { ...whereCondictions, role: Not(config.roles.admin) }

    // set institute
    if (instituteId) {
      whereCondictions = { ...whereCondictions, instituteId: instituteId }
    }

    // set exam
    if (examId) {
      whereCondictions = { ...whereCondictions, examId: examId }
    }

    if (payment_status) {
      whereCondictions = { ...whereCondictions, payment_status: payment_status }
    }
    if (registerd_from) {
      whereCondictions = { ...whereCondictions, registerd_from: registerd_from }
    }
    if (registerd_to) {
      whereCondictions = { ...whereCondictions, registerd_to: registerd_to }
    }

    if (registerd_from && registerd_to) {
      whereCondictions = { ...whereCondictions, createdAt: Between(registerd_from, registerd_to) }
    } else if (registerd_from) {
      whereCondictions = { ...whereCondictions, createdAt: MoreThan(registerd_from) }
    } else if (registerd_to) {
      whereCondictions = { ...whereCondictions, createdAt: LessThan(registerd_to) }
    }

    const userService = UserService.getInstance();
    const users: User[] = await userService.getUsers(
      [],
      whereCondictions, limit, offset
    );
    if (!users) {
      return res.status(400).json({
        status: 'error',
        message: 'Unable to get users!'
      });
    }
    res.status(200).json({
      status: 'success',
      users: users
    });
  }

  static editUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const userId = req.params.userId;

    //Get values from the body
    const { username, role } = req.body;

    //Try to find user on database
    const userRepository = getRepository(User);
    let user;
    try {
      user = await userRepository.findOneOrFail(userId);
    } catch (error) {
      //If not found, send a 404 response
      res.status(404).send("User not found");
      return;
    }

    //Validate the new values on model
    user.username = username;
    user.role = role;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Try to safe, if fails, that means username already in use
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("username already in use");
      return;
    }
    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };

  // TODO @abhijeet: delete from address table as well
  static deleteUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const userId = req.params.userId;

    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(userId);
    } catch (error) {
      res.status(404).send("User not found");
      return;
    }
    userRepository.delete(userId);

    //After all send a 204 (no content, but accepted) response
    res.status(200).json({
      status: 'success',
      message: 'User deleted!'
    });
  };

  // TODO @mahendra: get addres vi pincode
  static getAddressByPincode = async (req: Request, res: Response) => {

    const pincode = req.params.pincode;
    const axios = require('axios');
    let data = {
      city: '',
      state: ''
    }
    await axios.get('https://api.postalpincode.in/pincode/' + pincode)
      .then(response => {
        if (response.data[0]['Status'] == 'Success') {
          data.city = response.data[0]['PostOffice'][0]['District']
          data.state = response.data[0]['PostOffice'][0]['State']
        } else {
          console.log(response.data)
        }
      })
      .catch(error => {
        console.log(error);
      });
    res.status(200).json({
      status: 'success',
      message: data
    });
  };
};

export default UserController;
