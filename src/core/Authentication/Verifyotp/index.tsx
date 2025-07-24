import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TouchableOpacity,
} from 'react-native';
import {
  Screen,
  Button,
  Input,
  Title,
  Subtitle,
} from '../../../common/components';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {verifyotp} from '../../../redux/reducers/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '..';
import {useNavigation, useRoute} from '@react-navigation/native';
import {store} from '../../../redux/store';
import {isValideOtp} from '../Onboarding/validation';
import OtpInput from './Components/OTPInput';
type Props = NativeStackScreenProps<AuthStackParamList, 'Verifyotp'>;

export const Verifyotp = ({route, navigation}: Props) => {
  // export const Verifyotp = () => {
  // const route = useRoute();
  const token = route?.params?.token;
  // const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [loading, setLoading] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const [timer, setTimer] = useState<number>(5);

  const inputs = useRef<Array<any>>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResendOtp = () => {
    console.log('Resend OTP logic here...');
    setTimer(6);
    setOtp(['', '', '', '', '', '']); // Restart the timer
    // Dispatch resend action if needed
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join('').trim();

    if (isValideOtp(otpCode)) {
      try {
        setLoading(true);
        console.log('Verifying OTP:', otpCode);
        dispatch(verifyotp({code: otpCode, token:token}));
      } catch (error) {
        console.error('OTP verification failed:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Screen className="justify-center">
      <Title className="mb-6">Verification</Title>
      <Subtitle className="mb-8">
        Enter the 6-digit code sent to your mobile
      </Subtitle>

      <OtpInput
        otp={otp}
        setOtp={setOtp}
        isVerifying={isVerifying}
        autoFocus={true}
      />

      <Button
        onPress={handleVerifyOtp}
        disabled={otp.join('').length !== 6 || loading}
        className="mb-4">
        {loading ? (
          <Text className=" font-bodyBold text-primary-foreground">
            Verifying...
          </Text>
        ) : (
          <Text className="text-xl text-primary-foreground">Verify</Text>
        )}
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
    </Screen>
  );
};
