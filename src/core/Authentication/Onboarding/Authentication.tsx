import React, {useState} from 'react';
import {
  Screen,
  Text,
  Button,
  Heading,
  PhoneInput,
  Logo,
  Input,
  Subtitle,
} from '../../../common/components';
import {View, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {
  isVerify,
  logout,
  sendotp,
  verifyotp,
} from '../../../redux/reducers/auth';
import {isValidPhoneNumber, isValideOtp} from './validation';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '..';
import OtpInput from '../Verifyotp/Components/OTPInput';

export const Authentication = ({routes, index, setIndex}: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [phone, setPhone] = useState<string>('');
  const [countrycode, setCountryCode] = useState('IN');
  const [callingcode, setCallingcode] = useState('+91');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [timer, setTimer] = useState<number>(6);
  // const [isOTPSent, setIsOtpSent] = useState(false);
  const dispatch = useAppDispatch();
  const {isOTPSent, isOTPVerified, token} = useAppSelector(state => state.auth);

  const handleNext = () => {
    if (!isValidPhoneNumber(phone, callingcode)) return;
    console.log(callingcode + phone);
    if (token) {
      dispatch(logout());
    }
    dispatch(sendotp({phone_number: {callingCode: callingcode, phone: phone}}));
  };

  const handleVerify = () => {
    const code = otp.join('');
    if (!isValideOtp(code)) return;
    dispatch(verifyotp({code: code}));
  };

  const handleResendOtp = () => {
    console.log('Resend OTP logic here...');

    setTimer(6);
    dispatch(sendotp({phone_number: {callingCode: callingcode, phone: phone}}));
    setOtp(['', '', '', '', '', '']); // Restart the timer
    // Dispatch resend action if needed
  };

  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  React.useEffect(() => {
    if (isOTPVerified && index >= 0) {
      setIndex(index + 1);
    }
    return () => {
      dispatch(isVerify(false));
    };
  }, [isOTPVerified]);

  return (
    <Screen scrollable className="">
      <View className="w-full items-center">
        {!isOTPSent && <Logo />}
        <Heading className="text-center mb-5">
          {isOTPSent ? 'OTP Verification' : 'Enter your Phone number'}
        </Heading>
        {isOTPSent ? (
          <>
            <OtpInput
              otp={otp}
              setOtp={setOtp}
              isVerifying={isVerifying}
              autoFocus={true}
            />
          </>
        ) : (
          <>
            <PhoneInput
              phone={phone}
              setPhone={setPhone}
              countryCode={countrycode}
              setCountryCode={setCountryCode}
              callingCode={callingcode}
              setCallingCode={setCallingcode}
              className="mb-4"
            />
          </>
        )}
        <View className="mb-6 w-full items-center">
          {isOTPSent ? (
            <>
              <Button onPress={handleVerify} className="w-full mb-6">
                <Text>Verify</Text>
              </Button>

              <View className="flex-row justify-center items-center gap-1 ">
                <Subtitle>Didn't receive code?</Subtitle>
                {timer > 0 ? (
                  <Subtitle>{timer}s</Subtitle>
                ) : (
                  <TouchableOpacity onPress={handleResendOtp}>
                    <Subtitle className="font-bodyBold text-primary">
                      {' '}
                      Resend OTP
                    </Subtitle>
                  </TouchableOpacity>
                )}
              </View>
            </>
          ) : (
            <>
              <Button onPress={handleNext} className="w-full">
                <Text>Next</Text>
              </Button>
            </>
          )}
        </View>

        {isOTPSent ? (
          <></>
        ) : (
          <>
            <View className="flex-row justify-center items-center gap-1">
              <Subtitle>Alredy have an account?</Subtitle>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Subtitle className="font-bodyBold text-primary">
                  Signin
                </Subtitle>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </Screen>
  );
};
