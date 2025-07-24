import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import  {Signin}  from './Signin';
import  {Verifyotp}  from './Verifyotp';
import { Onboarding } from './Onboarding';

export type AuthStackParamList = {
  Signin: undefined;
  Verifyotp: {token:string};
  Onboarding:undefined;
};



export const Authentication = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Signin'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Verifyotp" component={Verifyotp} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </>
  );
};
