import React from 'react';
import {Image, ImageProps} from 'react-native';
import {Logo as LogoX} from '../../../assets/icons';

type LogoProps = {
  className?: string;
};

export const Logo = ({className, ...props}: LogoProps) => {
  return <LogoX className="w-[124px] h-[124px] self-center mb-5 mt-4" />;
};
