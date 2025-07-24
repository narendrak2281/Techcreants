import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {
  Text,
  Screen,
  Button,
  Input,
  DatePicker,
  Heading,
} from '../../../common/components';
import {useNavigation} from '@react-navigation/native';
import {ProfileIcon, Email, Education, Profession} from '../../../assets/icons';
import {BasicDetailsProps} from './type';

export const BasicDetails = ({
  routes,
  index,
  setIndex,
  inputs,
  setInputs,
}: BasicDetailsProps) => {
  const navigation: any = useNavigation();

  // Use local state for performance
  const [localInputs, setLocalInputs] = useState(inputs);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setLocalInputs(inputs); // Sync local with parent inputs when the screen is shown
  }, [inputs]);

  const handleInputChange = (name: string, value: string | Date | null) => {
    setLocalInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!localInputs.firstName) newErrors.firstName = 'First name is required';
    if (!localInputs.lastName) newErrors.lastName = 'Last name is required';
    if (!localInputs.email) newErrors.email = 'Email is required';
    if (!localInputs.education) newErrors.education = 'Education is required';
    if (!localInputs.profession) newErrors.profession = 'profession is required';
    if (!localInputs.dob) newErrors.dob = 'DOB is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setInputs(localInputs); // Commit changes to parent state only on Next
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    setIndex(index - 1);
  };

  return (
    <Screen scrollable className="">
      <View className="gap-4 items-center w-full">
        <Heading className="mb-2 text-center">Personal Information</Heading>
        <View className="w-full gap-6 mb-4 items-center">
          <Input
            leftIcon={ProfileIcon}
            placeholder="First Name"
            value={localInputs?.firstName}
            onChangeText={text => handleInputChange('firstName', text)}
            errorMessage={errors.firstName || ''}
          />
          <Input
            leftIcon={ProfileIcon}
            placeholder="Last Name"
            value={localInputs?.lastName}
            onChangeText={text => handleInputChange('lastName', text)}
            errorMessage={errors.lastName || ''}
          />
          <Input
            placeholder="Email"
            leftIcon={Email}
            value={localInputs?.email}
            onChangeText={text => handleInputChange('email', text)}
            errorMessage={errors.email || ''}
          />
          <View className="w-full ">
            <DatePicker
              placeholder="Date of Birth"
              value={localInputs?.dob}
              onChangeText={date => handleInputChange('dob', date)}
            />
            {errors.dob && (
              <Text className="text-red-500 text-sm mt-1">{errors.dob}</Text>
            )}
          </View>
          <Input
            placeholder="Latest Education"
            leftIcon={Education}
            value={localInputs?.education}
            onChangeText={text => handleInputChange('education', text)}
            errorMessage={errors.education || ''}
          />
          <Input
            placeholder="Profession"
            leftIcon={Profession}
            value={localInputs?.profession}
            onChangeText={text => handleInputChange('profession', text)}
            errorMessage={errors.profession || ''}
          />

        </View>
        <View className="flex-row gap-2 w-full">
          <Button className="flex-1" onPress={handleBack} variant="outline">
            <Text>Back</Text>
          </Button>
          <Button className="flex-1" onPress={handleNext}>
            <Text>Next</Text>
          </Button>
        </View>
      </View>
    </Screen>
  );
};
