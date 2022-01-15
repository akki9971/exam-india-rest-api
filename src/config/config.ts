export default {
  jwtSecret: '@QEGTUI',
  tokenLife: '1d',
  projectRoot: __dirname + '/../../',
  paymentGateway: {
    instamojo: 'instamojo',
    razorpay: 'razorpay'
  },
  smsService: {
    name: '',
    senderId: 'ExamIN',
    apiKey: '5688def6ca7ab'
  },
  roles: {
    owner: 'OWNER',
    admin: 'ADMIN',
    student: 'STUDENT',
    moderator: 'MODERATOR'
  },
  appBaseUrl: 'http://localhost:4200/',
  apiBaseUrl: 'http://localhost:3000/api/'
}
