import React from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cn } from '../../utils';

type ScreenProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  keyboardAvoiding?: boolean;
  className?: string;
};

export const Screen = ({
  children,
  scrollable = false,
  keyboardAvoiding = true,
  className,
}: ScreenProps) => {
  const baseClass = cn('flex-grow px-4 pb-6 bg-background justify-start item-center  pb-32', className);

  const body = (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {scrollable ? (
        <ScrollView
          style={{flex:1}}
          contentContainerClassName={baseClass} // baseClass now applies to contentContainer
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      ) : (
        <View className={baseClass}>{children}</View>
      )}
    </TouchableWithoutFeedback>
  );
  

  return (
    <SafeAreaView className="flex-1 bg-background ">
      {keyboardAvoiding ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 80}
          className="flex-1">
          {body}
        </KeyboardAvoidingView>
      ) : (
        body
      )}
    </SafeAreaView>
  );
};
