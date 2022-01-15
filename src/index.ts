import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as fs from 'fs';
import * as https from 'https';
import * as http from 'http';

// import all routes
import routes from './routes';

// DB connection
createConnection()
  .then(async connection => {

    // create tables if not exist
    await connection.synchronize();

    // ereate a new express application instance
    const app = express();

    // call middlewares
    app.use(cors());
    app.use(function (req, res, next) {
      res.header('Access-Control-Expose-Headers', '*');
      next();
    });

    app.use(helmet());
    app.use('/uploads', express.static('uploads'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // set all routes from routes folder
    app.use('/', routes);

    // set config for prod environment
    if (process.env.NODE_ENV === 'production') {

      const privateKey = fs.readFileSync('/home/ubuntu/ExamIn/SSL/private.key', 'utf8');
      const certificate = fs.readFileSync('/home/ubuntu/ExamIn/SSL/cert.crt', 'utf8');
      // ca = fs.readFileSync('/etc/letsencrypt/live/examin.co/fullchain.pem', 'utf8');
      const httpsCreds = {
        key: privateKey,
        cert: certificate,
        // ca: ca
      };
      const httpsServer = https.createServer(httpsCreds, app);
      httpsServer.listen(443, function () {
        console.log('Server started on port 443!');
      });

      // create an HTTP server on port 80 and redirect to HTTPS
      http.createServer(function (req, res) {
        res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
        res.end();
      }).listen(80, function (err) {
        console.log("Server started on port 80");
      });
    } else {
      app.listen(3000, () => {
        console.log('Server started on port 3000!');
      });
    }
  })
  .catch(error => console.log(error));
