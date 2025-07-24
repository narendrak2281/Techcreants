import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {
  Text,
  Button,
  Screen,
  Heading,
  Input,
} from '../../../common/components';
import {Address1, Country, State, Pincode} from '../../../assets/icons';
import {AddressDetailsProps} from './type';
import { useAppSelector } from '../../../redux/store';

export const AddressDetails = ({
  index,
  setIndex,
  inputs,
  setInputs,
  setSubmit,
}: AddressDetailsProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [localInputs, setLocalInputs] = useState(inputs);
  const {currentUser} = useAppSelector(state => state)
  console.log(currentUser)

  useEffect(() => {
    setLocalInputs(inputs); // sync local state when screen loads
  }, [inputs]);

  const handleInputChange = (name: string, value: string) => {
    setLocalInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!localInputs.address1) newErrors.address1 = 'Address Line 1 is required';
    if (!localInputs.address2) newErrors.address2 = 'Address Line 2 is required';
    if (!localInputs.city) newErrors.city = 'City is required';
    if (!localInputs.state) newErrors.state = 'State is required';
    if (!localInputs.country) newErrors.country = 'Country is required';
    if (!localInputs.pincode) newErrors.pincode = 'Pincode is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBack = () => {
    setIndex(index - 1);
  };

  const handleSubmit = () => {
    if (validate()) {
      setInputs(localInputs); // commit final data
      setSubmit(true); // trigger PATCH submission
    }
  };

  return (
    <Screen scrollable keyboardAvoiding>
      <Heading className="text-center mb-8">Address Information</Heading>
      <View className="gap-6 w-full items-center">
        <Input
          value={localInputs.address1}
          onChangeText={text => handleInputChange('address1', text)}
          placeholder="Address Line 1"
          leftIcon={Address1}
          errorMessage={errors.address1 || ''}
        />
        <Input
          value={localInputs.address2}
          onChangeText={text => handleInputChange('address2', text)}
          placeholder="Address Line 2"
          leftIcon={Address1}
          errorMessage={errors.address2 || ''}
        />
        <Input
          value={localInputs.country}
          onChangeText={text => handleInputChange('country', text)}
          placeholder="Country"
          leftIcon={Country}
          errorMessage={errors.country || ''}
        />
        <Input
          value={localInputs.state}
          onChangeText={text => handleInputChange('state', text)}
          placeholder="State"
          leftIcon={State}
          errorMessage={errors.state || ''}
        />
        <Input
          value={localInputs.city}
          onChangeText={text => handleInputChange('city', text)}
          placeholder="City"
          leftIcon={Address1}
          errorMessage={errors.city || ''}
        />
        <Input
          value={localInputs.pincode}
          onChangeText={text => handleInputChange('pincode', text)}
          placeholder="Pincode"
          leftIcon={Pincode}
          keyboardType="decimal-pad"
          errorMessage={errors.pincode || ''}
        />
      </View>
      <View className="flex-row gap-2 w-full mt-8 mb-8">
        <Button className="flex-1" onPress={handleBack} variant="outline">
          <Text>Back</Text>
        </Button>
        <Button className="flex-1" onPress={handleSubmit}>
          <Text>Submit</Text>
        </Button>
      </View>
    </Screen>
  );
};
