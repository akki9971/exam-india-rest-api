## Installation

```bash
git clone https://abhijeetwebdev@bitbucket.org/examindia/exam-india-rest-api.git
cd exam-india-rest-api
npm install
```
# Production deployment steps
1. Login into AWS console: ssh -i "ExamInAdmin.pem" ubuntu@ec2-35-154-117-147.ap-south-1.compute.amazonaws.com
2. Go to "~/ExamIn/exam-india-rest-api" directory and take a pull on the master branch
3. ORM and Env config: sudo cp ~/ExamIn/ormconfig.json ~/ExamIn/exam-india-rest-api/ormconfig.json
4. Prod config: sudo mv ~/ExamIn/exam-india-rest-api/src/config/config.prod.ts ~/ExamIn/exam-india-rest-api/src/config/config.ts
5. Build: sudo npm run build:prod
6. Start server with PM2: sudo pm2 start ./dist/api/index.js

## Contributors
[Abhijeet Salunkhe](https://github.com/abhijeetwebdev/)

## Migration scripts
ts-node ./node_modules/typeorm/cli.js migration:run // to populate initial data
ts-node ./node_modules/typeorm/cli.js migration:create -n CreateInstitutes // to create new migrations

## Contributors
[Abhijeet Salunkhe](https://github.com/abhijeetwebdev/)
