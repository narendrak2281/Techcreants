import React, {useState, useEffect, useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {
  Text,
  Button,
  Screen,
  OrDivider,
  PhoneInput,
  Logo,
  Title,
  Subtitle,
} from '../../../common/components';
import {sendotp} from '../../../redux/reducers/auth';
import {GoogleButton} from './Components/GoogleButton';
import {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {AuthStackParamList} from '..';
import {isValidPhoneNumber} from '../Onboarding/validation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signin'>;

export const Signin = ({navigation}: Props) => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('+91');
  const dispatch = useAppDispatch();

  const handleSignup = () => {
    navigation.navigate('Onboarding');
  };

  const handleSendOTP = () => {
    if (isValidPhoneNumber(phone, callingCode)) {
      console.log('OTP send');
      dispatch(
        sendotp({phone_number:{callingCode:callingCode,phone:phone}, navigation: navigation}),
      );
    }
  };

  return (
    <Screen scrollable keyboardAvoiding className="mt-32">
      <Logo />
      {/* Title */}
      <Title className="mb-4">Welcome</Title>

      {/* Subtitle */}
      <Subtitle className="mb-8">Sign in to continue</Subtitle>

      {/* Phone input */}
      <PhoneInput
        phone={phone}
        setPhone={setPhone}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        callingCode={callingCode}
        setCallingCode={setCallingCode}
        className="mb-6"
      />

      {/* Send OTP Button */}
      <Button onPress={handleSendOTP} className="mb-2">
        <Text className="">Sign In</Text>
      </Button>

      {/* Divider */}
      <OrDivider className="mb-2" />

      {/* Google sign in button */}
      <GoogleButton className="mb-8" />

      {/*  */}

      <View className="flex-row justify-center items-center gap-1 ">
        <Subtitle>Didn't receive code?</Subtitle>

        <TouchableOpacity onPress={handleSignup}>
          <Subtitle className="font-bodyBold text-primary"> Signup</Subtitle>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};
