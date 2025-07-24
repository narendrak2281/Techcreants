// ui/components/toastConfig.tsx
import React from 'react';
import { View } from 'react-native';
import { ToastConfig } from 'react-native-toast-message';
import { Alert, AlertTitle, AlertDescription } from '../Alert';
// import { Text } from '../Text';
// import { Code } from '../../../assets/icons/Code';
import { Terminal } from '../../../assets/icons/Terminal';
import { CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react-native';

export const toastConfig: ToastConfig = {
  success: ({ text1, text2, props }) => (
    <View className='mx-4  mt-2'>
      <Alert icon={CheckCircle} className='bg-green-100 dark:bg-green-900'>
        <AlertTitle className='text-foreground' >{text1}</AlertTitle>
        <AlertDescription className='text-foreground' >{text2}</AlertDescription>
      </Alert>
    </View>
  ),
  error: ({ text1, text2, props }) => (
    <View className='mx-4 mt-2'>
      <Alert icon={AlertCircle} className='bg-red-100 dark:bg-red-900' >
      <AlertTitle className='text-foreground' >{text1}</AlertTitle>
      <AlertDescription className='text-foreground' >{text2}</AlertDescription>
      </Alert>
    </View>
  ),
  base: ({ text1, text2, props }) => (
    <View className='mx-4 mt-2' >
      <Alert icon={props?.icon || Terminal} className='bg-gray-100 dark:bg-gray-900' >
      <AlertTitle className='text-foreground' >{text1}</AlertTitle>
      <AlertDescription className='text-foreground' >{text2}</AlertDescription>
      </Alert>
    </View>
  ),
};
