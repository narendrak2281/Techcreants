import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Text,
  Input,
} from '../../../../common/components';

// Define the memoized dialog content component
export const VerifyOTPContainer = React.memo(
  ({
    otp,
    setOTP,
    handleVerifyOtp,
  }: {
    otp: string;
    setOTP: (text: string) => void;
    handleVerifyOtp: () => void;
  }) => {
    return (
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Verify OTP</AlertDialogTitle>
            <AlertDialogDescription>
              Enter the OTP sent to your phone number.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Input
            placeholder="Enter 6 digit OTP"
            value={otp}
            onChangeText={setOTP}
            keyboardType="decimal-pad"
            maxLength={6} // Add maxLength for OTP
            className='text-foreground'
          />
          <AlertDialogFooter>
            <AlertDialogAction onPress={handleVerifyOtp}>
              <Text className="font-robotoBold">Verify</Text>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
);