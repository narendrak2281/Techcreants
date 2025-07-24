import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Authentication} from '../Authentication';
import Main from '../Main';
import {useAppSelector} from '../../redux/store';
import {Splash} from '../Authentication/Splash';

export type RootStackParamList = {
  Authentication: undefined;
  Main: undefined;
};

export const Root = () => {
  const {loggedIn} = useAppSelector(state => state.currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createNativeStackNavigator<RootStackParamList>();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!loggedIn ? (
          <Stack.Screen
            name="Authentication"
            component={Authentication}
            options={{gestureEnabled: false}}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={Main}
            options={{gestureEnabled: false}}
          />
        )}
      </Stack.Navigator>
    </>
  );
};

export default Root;
