export default {
  jwtSecret: '@QEGTUI',
  tokenLife: '1d',
  projectRoot: __dirname + '/../../../',
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
  appBaseUrl: 'https://examin.co/',
  apiBaseUrl: 'https://examin.co/api/'
}
