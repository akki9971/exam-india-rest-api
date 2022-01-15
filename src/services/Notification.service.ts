import { getRepository, getManager } from "typeorm";

import { Notification } from "../entity/Notification";

class NotificationService {

    private notificationRepository;
    private static instance: NotificationService;

    constructor() {
        this.notificationRepository = getRepository(Notification);
    }

    public static getInstance(): NotificationService {
        if (!NotificationService.instance) {
            NotificationService.instance = new NotificationService();
        }

        return NotificationService.instance;
    }

    /**
    * create notification
    * @param notification
    */
    create = async (notification: Notification) => {
        return await this.notificationRepository.save(notification);
    }

    /**
    * get notifications
    * @param identifiers: where condiction checks
    * @param limit: number
    * @param offset: number
    */
    getNotifications = async (identifiers: object, limit: number, offset: number) => {
        return await getManager()
            .createQueryBuilder(Notification, 'notification')
            .select('notificationId')
            .addSelect('title')
            .addSelect('body')
            .addSelect('type')
            .addSelect('link')
            .addSelect('userId')
            .addSelect('isRead')
            .addSelect('createdAt')
            .where(identifiers)
            .limit(limit)
            .offset(offset)
            .orderBy({ createdAt: 'DESC' })
            .getRawMany();
    }

    /**
    * udpate notifications read status
    * @param userId number
    * @param isRead boolean
    * @param notificationIds array
    */
    updateReadStatus = async (userId: number, isRead: boolean, notificationIds: number[]) => {
        return await getManager()
            .createQueryBuilder()
            .update(Notification)
            .set({ isRead: isRead })
            .where({ userId: userId })
            .andWhere('notificationId IN (:notificationIds)', { notificationIds: notificationIds })
            .execute();
    }

    /**
     * get uread notifications count
     * @param userId
     * @param isRead boolean
     */
    getCount = async (userId: number, isRead: boolean) => {
        return await this.notificationRepository.count({
            where: {
                userId: userId,
                isRead: isRead
            }
        });
    }
    
}

export default NotificationService;
