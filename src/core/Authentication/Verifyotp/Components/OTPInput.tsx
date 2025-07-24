import React, { useRef, useState, useEffect } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TouchableOpacity,
  Text,
} from 'react-native';
import { cn } from '../../../../common/utils';

interface OtpInputProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  isVerifying: boolean;
  autoFocus?: boolean;
  className?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({
  otp,
  setOtp,
  isVerifying,
  autoFocus = true,
  className,
}) => {
  const OTP_LENGTH = otp.length;
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [focusedInput, setFocusedInput] = useState<number | null>(null);

  // Auto-focus first input when component mounts
  useEffect(() => {
    if (autoFocus) {
      const timeout = setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [autoFocus]);

  // Handle text change in input
  const handleChange = (text: string, index: number) => {
    const digits = text.replace(/\D/g, '').split('');
    if (digits.length === 0) return;

    const newOtp = [...otp];
    let currentIndex = index;

    for (let digit of digits) {
      if (currentIndex >= OTP_LENGTH) break;
      newOtp[currentIndex] = digit;
      currentIndex++;
    }

    setOtp(newOtp);

    if (currentIndex < OTP_LENGTH) {
      inputRefs.current[currentIndex]?.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
  
      if (otp[index] !== '') {
        // Just clear the current field
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        // Current is already empty → go back and clear previous
        inputRefs.current[index - 1]?.focus();
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
  };
  

  // Paste full OTP from clipboard
  const handleOtpPaste = async () => {
    try {
      const clipboardContent = await Clipboard.getString();
      const cleaned = clipboardContent.replace(/\D/g, '');

      if (cleaned.length === OTP_LENGTH) {
        const otpArray = cleaned.split('');
        setOtp(otpArray);
        inputRefs.current[OTP_LENGTH - 1]?.focus();
      }
    } catch (error) {
      console.error('Failed to paste OTP', error);
    }
  };

  return (
    <>
      {/* OTP Input Fields */}
      <View className="flex-row justify-center mb-6 space-x-2 gap-3 ">
        {otp.map((digit, index) => {
          const isFocused = focusedInput === index;
          const hasValue = digit !== '';
          const borderStyle = isVerifying
            ? 'border-border bg-background'
            : isFocused
            ? 'border-primary'
            : hasValue
            ? 'border-primary'
            : 'border-border';

          return (
            <TextInput
              key={index}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              editable={!isVerifying}
              ref={(input) => {
                inputRefs.current[index] = input;
              }}
              onFocus={() => setFocusedInput(index)}
              onBlur={() => setFocusedInput(null)}
              className={cn(
                `w-12 h-12 text-center text-foreground text-xl border rounded-lg bg-background ${borderStyle}`,
                className
              )}
              accessibilityLabel={`OTP digit ${index + 1}`}
              accessibilityHint="Enter a single digit"
            />
          );
        })}
      </View>

      {/* Paste OTP Button */}
      <TouchableOpacity
        onPress={handleOtpPaste}
        disabled={isVerifying}
        className="mb-4 "
        accessibilityLabel="Paste OTP from clipboard"
        accessibilityHint="Attempts to paste a 6-digit OTP from your clipboard"
      >
        <Text
          className={`text-primary font-robotoMedium text-center ${
            isVerifying ? 'opacity-70' : ''
          }`}
        >
          Paste from clipboard
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default OtpInput;