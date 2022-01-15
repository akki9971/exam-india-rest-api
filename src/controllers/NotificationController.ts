import { getRepository, getConnection } from 'typeorm';
import { Request, Response } from 'express';
import { MoreThan } from "typeorm";

// entities
import { Notification } from '../entity/Notification';

// services
import NotificationService from '../services/Notification.service';

class NotificationController {

    /**
     * get the all notifications
     */
    static getAll = async (req: Request, res: Response) => {

        // fetch params
        const { limit, offset, type } = req.query;
        const { userId } = req.params;

        // pagination params
        const pagination = { limit: 12, offset: 0 };

        // update pagination attrs
        if (limit) { pagination.limit };
        if (offset) { pagination.offset };

        // where conditions
        let whereCondictions = {};
        whereCondictions = { ...whereCondictions, userId: userId };

        // don't display older notification
        var date = new Date();
        // add a day
        date.setDate(date.getDate() - 1);
        whereCondictions = { ...whereCondictions, createdAt: MoreThan(date.toISOString()) };

        // if (type) {
        //     whereCondictions = { ...whereCondictions, type: type }
        // };

        const notificationService = NotificationService.getInstance();
        const notifications = await notificationService.getNotifications(
            whereCondictions, limit, offset
        );
        if (!notifications) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to get notifications!'
            });
        }

        // get unread notifs count
        const unreadCount = await notificationService.getCount(userId, false);

        return res.status(200).json({
            status: 'success',
            notifications: notifications,
            unreadCount: unreadCount
        });
    };

    /**
     * mark as read
     */
    static markAsRead = async (req: Request, res: Response) => {
        // fetch params
        const { userId } = req.params;
        const { notificationIds } = req.body;

        const notificationService = NotificationService.getInstance();
        const updated = await notificationService.updateReadStatus(userId, true, notificationIds);
        if (!updated) {
            return res.status(400).json({
                status: 'error',
                message: 'Unable to mark notifications read!'
            });
        }
        return res.status(200).json({
            status: 'success',
            message: 'Notifications marked read successfully'
        });
    }

    static saveNotification = async (notif: Notification) => {

        const notifRepository = getRepository(Notification);
        try {
            return await notifRepository.save(notif);
        } catch (e) {
            return e;
        }
    }
}

export default NotificationController;
