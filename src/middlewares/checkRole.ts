import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/User";
import config from "../config/config";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Get the user ID from previous middleware
    const userId = res.locals.jwtPayload.userId;
    const reqUserId = req.params.userId;

    // reset defaults
    req.params.isAdmin = false;
    req.params.isModerator = false;
    req.params.isOwner = false;

    // TODO @abhijeet: create a user service and access the data from that
    // Get user role from the database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(userId);
      // preserve user info for later use
      req.body.user = user;
    } catch (e) {
      res.status(401).send();
    }

    // Checking if requesting user is owner
    if (user.userId === Number(reqUserId)) {
      req.params.isOwner = true;
    }

    // Checking if user is admin
    if (user.role.toUpperCase() === config.roles.admin) {
      req.params.isAdmin = true;
    }

    // Checking if user is moderator
    if (user.role.toUpperCase() === config.roles.moderator) {
      req.params.isModerator = true;
    }

    // Check if array of authorized roles includes the user's role
    if (roles.indexOf(user.role) > -1 || req.params.isOwner === true) {
      next();
    } else {
      res.status(401).send();
    }
  };
};
