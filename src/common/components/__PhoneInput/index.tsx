import React from 'react';
import {View, TextInput, Text} from 'react-native';
import CountryPicker from './CountryPicker';
import { cn } from '../../utils';

// Define the type for a country
interface Country {
  code: string;
  name: string;
  flag: string;
  callingCode: string;
}

// Import country data
const countries: Country[] = require('../../../assets/data/countries.json');

interface PhoneInputProps {
  phone: string;
  setPhone: (phone: string) => void;
  countryCode: string;
  setCountryCode: (code: string) => void;
  callingCode: string;
  setCallingCode: (code: string) => void;
  className?:string
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  phone,
  setPhone,
  countryCode,
  setCountryCode,
  callingCode,
  setCallingCode,
  className
}) => {
  // Find the selected country with correct typing
  const selectedCountry: Country | undefined = countries.find(
    (c: Country) => c.code === countryCode,
  );

  return (
    <View className={cn("w-full",className)}>
      {/* Country Picker - Styled to match the design */}
      <CountryPicker
        selectedCountry={countryCode}
        selectedCallingCode={callingCode}
        onSelectCountry={(code, callingCode) => {
          setCountryCode(code);
          setCallingCode(callingCode);
        }}
      />

      {/* Phone Input Field - Styled to match the design */}
      <View className="flex flex-row items-center border border-border rounded-xl bg-background shadow-sm h-14 mt-3">
        <View className="flex-row items-center justify-center pl-4 pr-2 border-r border-border">
          <Text className="text-xl mr-1 text-foreground font-body">{selectedCountry?.flag}</Text>
          <Text className="text-xl font-body text-foreground">{callingCode}</Text>
        </View>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          keyboardType="decimal-pad"
          placeholder="Enter phone number"
          placeholderTextColor="#9ca3af"
          className="pl-4 text-xl flex-1 font-body text-foreground"
        />
      </View>
    </View>
  );
};

export default PhoneInput;
