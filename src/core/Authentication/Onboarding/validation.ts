import {isValidPhoneNumber as isValidePhone} from 'libphonenumber-js';
import {showErrorMessage} from '../../../common/utils';

export const isValidPhoneNumber = (
  phone: string,
  callingcode: string,
): boolean => {
  if (phone === '') {
    showErrorMessage('Phone number is required');
    return false;
  }
  const senitizedCode = callingcode.replace(/^\+/, '');
  const isValid = isValidePhone(phone, {
    defaultCallingCode: senitizedCode,
  });
  if (!isValid || (senitizedCode === '91' && phone.length !== 10)) {
    showErrorMessage('Invalid phone number');
    return false;
  }
  return true;
};

export const isValideOtp = (otp: string): boolean => {
  if (otp.length != 6) {
    showErrorMessage('OTP must be 6 digit');
    return false;
  }

  return true;
};

export const isValidBasicDetail = ():boolean => {

  

  return true;
}