import React, { useEffect } from 'react';
import { Text } from '../../../../common/components';

interface OtpTimerProps {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setIsResendDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  initialTime?: number;
}

const OtpTimer: React.FC<OtpTimerProps> = ({
  timer,
  setTimer,
  setIsResendDisabled,
  initialTime = 60, // Default 60 seconds
}) => {

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimer, setIsResendDisabled]); // <-- Only functions, no `timer`

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timer <= 30) return 'text-red-600';
    if (timer <= 60) return 'text-orange-500';
    return 'text-black';
  };

  return (
    <Text
      className={`text-2xl font-robotoRegular text-center mb-8 tracking-widest ${getTimerColor()}`}
      accessibilityLabel={`Time remaining: ${formatTime(timer)}`}
    >
      {formatTime(timer)}
    </Text>
  );
};

export default OtpTimer;
