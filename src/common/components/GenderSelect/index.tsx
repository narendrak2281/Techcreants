// components/GenderSelect.tsx
import React from 'react';
import { Text } from '../Text';
import { View, TouchableOpacity } from 'react-native';

type Props = {
  value: string;
  onChange: (val: string) => void;
  options?: string[];
};

export const GenderSelect = ({ value, onChange, options = ['Male', 'Female', 'Other'] }: Props) => {
  return (
    <View className="flex-row space-x-6 mb-6">
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onChange(option)}
          className="flex-row items-center"
        >
          <View
            className={`w-4 h-4 rounded-full border border-gray-400 mr-2 ${
              value === option ? 'bg-primary border-primary' : ''
            }`}
          />
          <Text className="text-base">{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

