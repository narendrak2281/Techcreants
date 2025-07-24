import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { MoveLeft } from '../../../assets/icons/MoveLeft';
import { Search } from '../../../assets/icons/Search';
import { X } from '../../../assets/icons/X';
import countries from '../../../assets/data/countries.json';
import { cn } from '../../utils';

interface CountryCodePickerProps {
  phone: string;
  setPhone: (phone: string) => void;
  countryCode: string;
  setCountryCode: (code: string) => void;
  callingCode: string;
  setCallingCode: (code: string) => void;
  className?: string;
}

const CountryCodePicker: React.FC<CountryCodePickerProps> = ({
  phone,
  setPhone,
  countryCode,
  setCountryCode,
  callingCode,
  setCallingCode,
  className,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const selectedCountry = countries.find((c) => c.code === countryCode);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectCountry = (code: string, callCode: string) => {
    setCountryCode(code);
    setCallingCode(callCode);
    setIsModalVisible(false);
    setSearchText('');
  };

  return (
    <View className={cn('w-full', className)}>
      {/* Phone Input Row */}
      <View className="flex-row items-center border border-border rounded-xl bg-background shadow-sm h-14">
        {/* Flag + Calling Code */}
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          className="flex-row items-center justify-center pl-4 pr-2 border-r border-border"
        >
          <Text className="text-2xl mr-1 text-foreground">{selectedCountry?.flag}</Text>
          <Text className="text-lg font-body text-foreground">
            {callingCode}</Text>
        </TouchableOpacity>

        {/* Phone Input */}
        <TextInput
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          placeholderTextColor="#9ca3af"
          className="pl-4 text-xl flex-1 font-body text-foreground"
        />
      </View>

      {/* Modal for selecting country */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <SafeAreaView className="flex-1 bg-background">
          {/* Header */}
          <View className="flex-row items-center p-4">
            <TouchableOpacity onPress={() => setIsModalVisible(false)} className="mr-4">
              <MoveLeft className="color-foreground" />
            </TouchableOpacity>
            <Text className="text-2xl font-body flex-1 text-foreground">Select Country</Text>
          </View>

          {/* Search Bar */}
          <View className="p-4">
            <View className="flex-row items-center border border-border rounded-xl bg-background px-2">
              <Search className="color-border" />
              <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search country"
                placeholderTextColor="#9ca3af"
                className="p-3 text-lg flex-1 font-body text-foreground"
              />
              {searchText.length > 0 && (
                <TouchableOpacity onPress={() => setSearchText('')}>
                  <X className="color-muted-foreground" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Country List */}
          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.code}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectCountry(item.code, item.callingCode)}
                className="p-4 flex-row items-center border-b border-border mx-4"
              >
                <Text className="text-2xl mr-4 text-foreground">{item.flag}</Text>
                <View className="flex-1">
                  <Text className="text-lg font-body text-foreground">{item.name}</Text>
                  <Text className="text-md font-body text-muted-foreground">{item.callingCode}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default CountryCodePicker;
