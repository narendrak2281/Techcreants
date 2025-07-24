import {Button, Text} from '../../../../common/components';
import React from 'react';
import {Google} from '../../../../assets/icons/Google';
import {cn} from '../../../../common/utils';
import {View} from 'react-native';

type GoogleButtonProps = {
  className?: string;
};

export const GoogleButton = ({className}: GoogleButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn('flex-row items-center gap-2 h-5', className)}>
      <Google className="w-6 h-6" />

      <Text className="text-md">Sign in with Google</Text>
    </Button>
  );
};
