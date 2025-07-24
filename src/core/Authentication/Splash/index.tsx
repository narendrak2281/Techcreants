import React from 'react';
import {Image, Text, View} from 'react-native';
import { Logo } from '../../../common/components';

export const Splash = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background border-border ">
      <Logo  />
    </View>
  );
};
