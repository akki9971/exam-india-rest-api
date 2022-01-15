import axios from 'axios';
import config from '../config/config';

class SMSService {

  /**
   * sending SMS
   * @param smsUrl
   */
  static async send(smsUrl: string) {
    // console.log('SMS url: ', smsUrl);
    return await axios.get(smsUrl);
  }

  /**
   * sending SMS
   * @param user
   */
  static async sendOTP(user) {

    const { mobile, mobileOTP } = user;
    const name = user.fullName.split(' ')[0] || user.firstName;

    // send otp verification through SMS
    const text = encodeURIComponent(`Dear ${name}, Your ExamIn verification code is ${mobileOTP}. - AlphabetIN`);
    // console.log('Sending SMS: ', text);

    // preparing get request for SMS API call
    const url = `http://www.commnestsms.com/api/push?apikey=${config.smsService.apiKey}&route=OTP&sender=${config.smsService.senderId}&mobileno=${mobile}&text=${text}`;

    return await axios.get(url);
  }

  /**
   * sending welcome message
   * @param user
   */
  static async sendWelcomeMessage(user) {
    const name = user.fullName.split(' ')[0] || user.firstName;

    // send otp verification through SMS
    const text = encodeURIComponent(`Dear ${name}, You have successfully registered on ExamIn. Please proceed to apply for an exam. Thanks, www.examin.co - AlphabetIN`);
    // console.log('Sending SMS: ', text);

    // preparing get request for SMS API call
    const url = `http://www.commnestsms.com/api/push?apikey=${config.smsService.apiKey}&route=OTP&sender=${config.smsService.senderId}&mobileno=${user.mobile}&text=${text}`;
    // console.log('url', url);

    return await axios.get(url);
  }
}

export default SMSService;
