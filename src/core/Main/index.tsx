import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../Navigation/BottomTab';
import {TermsConditions} from './TermsConditions';
import {QrScanner} from './QrScanner';
import {Event} from './Home/type';
import {useAppDispatch} from '../../redux/store';
import {refreshToken} from '../../redux/reducers/auth';
import {QrGenerator} from './QrGenerator';

export type MainParamList = {
  BottomTab: undefined;
  TermsConditions: undefined;
  QrScanner: {event: Event};
  QrGenerator: {event: Event};
};

const Main = () => {
  const Stack = createNativeStackNavigator<MainParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="QrScanner" component={QrScanner} />
      <Stack.Screen name="QrGenerator" component={QrGenerator} />
    </Stack.Navigator>
  );
};

export default Main;
