import { Router, Request, Response } from 'express';
import auth from './authRoutes';
import user from './userRoutes';
import payment from './paymentRoutes';
import file from './fileRoutes';
import exam from './examRoutes';
import notification from './notificationRoutes';
import category from './categoryRoutes';
import questionBank from './questionBankRoutes';
import * as path from 'path';

// routes
const routes = Router();

// API endpoints
routes.get('/api/', (req, res) => {
    res.send('API Server is running here!');
});
routes.use('/api/auth', auth);
routes.use('/api/user', user);
routes.use('/api/payment', payment);
routes.use('/api/file', file);
routes.use('/api/exam', exam);
routes.use('/api/notification', notification);
routes.use('/api/category', category);
routes.use('/api/question-bank', questionBank);

// allowd extensions for public directory
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];

// set angular prod build path
routes.get('*', (req: Request, res: Response) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(__dirname, `./../../public/${req.url}`));
    } else {
        res.sendFile(path.resolve(__dirname, './../../public/index.html'));
    }
});

export default routes;
