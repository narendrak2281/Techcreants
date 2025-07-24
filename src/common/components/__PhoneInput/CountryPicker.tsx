import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import countries from '../../../assets/data/countries.json';
import {MoveLeft} from '../../../assets/icons/MoveLeft';
import {Search} from '../../../assets/icons/Search';
import {ChevronRight} from '../../../assets/icons/ChevronRight';
import {X} from '../../../assets/icons/X';

interface CountryPickerProps {
  selectedCountry: string;
  selectedCallingCode: string;
  onSelectCountry: (code: string, callingCode: string) => void;
}

const CountryPicker: React.FC<CountryPickerProps> = ({
  selectedCountry,
  onSelectCountry,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View className="w-full">
      <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
        className="flex-row items-center justify-between p-4 border border-border rounded-xl bg-background ">
        <Text className="text-xl font-body text-foreground">
          {countries.find(c => c.code === selectedCountry)?.name ??
            'Select Country'}
        </Text>
        <ChevronRight className='color-muted-foreground' />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setIsVisible(false)}>
        <SafeAreaView className="flex-1 bg-background">

          <View className="flex-row items-center p-4 border-border">
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              className="mr-4">
                <MoveLeft  className='color-foreground' />
            </TouchableOpacity>
            <Text className="text-2xl font-body flex-1 text-foreground">Select Country</Text>
          </View>

          <View className="p-4">
            <View className="flex-row items-center border border-border rounded-xl bg-background px-2">
              <Search className='color-border' />
              <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search country"
                placeholderTextColor="#9ca3af"
                className="p-3 text-lg flex-1 font-body text-foreground"
              />
              {searchText.length > 0 && (
                <TouchableOpacity onPress={() => setSearchText('')}>
                  <X className='color-muted-foreground' />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <FlatList
            data={filteredCountries}
            keyExtractor={item => item.code}
            contentContainerStyle={{paddingBottom: 20}}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  onSelectCountry(item.code, item.callingCode);
                  setIsVisible(false);
                }}
                className="p-4 flex-row items-center border-b border-border  mx-4">
                <Text className="text-2xl text-foreground mr-4">{item.flag}</Text>
                <View className="flex-1">
                  <Text className="text-lg font-body text-foreground">{item.name}</Text>
                  <Text className="text-md text-foreground font-body">{item.callingCode}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default CountryPicker;
