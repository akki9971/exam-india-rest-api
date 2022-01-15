import { Request, Response, NextFunction } from 'express';

// services
import UserService from '../../services/User.service';

class UserValidator {

  /**
   * check if requested userId is valid
   * @param findIn: location in req object to find userId
   * @param req, res
   */
  static checkUserId = (findIn: string = 'params') => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const userId: number = req[findIn].userId;
      const userService = UserService.getInstance();
  
      const user = await userService.getUserDetails([], { userId: userId });
  
      if (!user) {
        return res.status(401).json({
          status: 'error',
          message: 'User does not exist!'
        });
      }
  
      // append user details for further use
      req.body.user = user;
  
      // valid user id, process further
      next();
    }
  }

  /**
   * check if mobile number give has already used
   * @param req, res
   */
  static checkMobileExist = async (req: Request, res: Response, next: NextFunction) => {

    const mobile = req.body.mobile;
    const userService = UserService.getInstance();

    const exist = await userService.getUserDetails([],
      { mobile: mobile }
    );

    if (exist) {
      return res.status(401).json({
        status: 'error',
        message: 'Mobile number has already been used!'
      });
    }

    next();
  }

  /**
   * check if email id give has already used
   * @param req, res
   */
  static checkEmailExist = async (req: Request, res: Response, next: NextFunction) => {

    const email = req.body.email;
    const userService = UserService.getInstance();

    const exist = await userService.getUserDetails([],
      { email: email }
    );

    if (exist) {
      return res.status(401).json({
        status: 'error',
        message: 'Email id has already been used!'
      });
    }

    next();
  }

}

export default UserValidator;
