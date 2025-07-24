import React, {useEffect, useState} from 'react';
import {Dimensions, View, TouchableOpacity, ScrollView} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Screen, Subtitle, Title} from '../../../common/components';
import {useNavigation} from '@react-navigation/native';
import {BasicDetails} from './BasicDetails';
import {AddressDetails} from './AddressDetails';
import {Authentication} from './Authentication';
import {address, basic} from './type';
import {useAppDispatch} from '../../../redux/store';
import {updateProfile} from '../../../redux/reducers/auth';

export const Onboarding = () => {
  const navigation: any = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'authentication'},
    {key: 'basicDetails'},
    {key: 'addressDetails'},
  ]);

  const dispatch = useAppDispatch();
  const totalSteps = routes.length;
  const currentStep = index + 1;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const [basicDetails, setBasicDetails] = useState<basic>({
    firstName: '',
    lastName: '',
    email: '',
    education: '',
    dob: null,
    profession: '',
  });

  const [addressDetails, setAddressDetails] = useState<address>({
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });

  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const combineData = {
    first_name: basicDetails?.firstName,
    last_name: basicDetails?.lastName,
    email: basicDetails?.email,
    education: basicDetails?.education,
    gender: 'MALE', // Add this if you're collecting gender separately
    date_of_birth: basicDetails?.dob
      ? basicDetails.dob.toISOString().split('T')[0] // "YYYY-MM-DD"
      : '',
    profession: basicDetails?.profession,

    address: {
      address_line_1: addressDetails?.address1,
      address_line_2: addressDetails?.address2,
      city: addressDetails?.city,
      state: addressDetails?.state,
      country: addressDetails?.country,
      pincode: addressDetails?.pincode,
    },
  };

  const renderScene = SceneMap({
    authentication: () => (
      <Authentication routes={routes} index={index} setIndex={setIndex} />
    ),
    basicDetails: () => (
      <BasicDetails
        routes={routes}
        index={index}
        setIndex={setIndex}
        inputs={basicDetails}
        setInputs={setBasicDetails}
      />
    ),
    addressDetails: () => (
      <AddressDetails
        routes={routes}
        index={index}
        setIndex={setIndex}
        inputs={addressDetails}
        setInputs={setAddressDetails}
        setSubmit={setIsSubmit}
      />
    ),
  });

  useEffect(() => {
    if (isSubmit) {
      setIsSubmit(false);
      console.log('Lets Play ');
      dispatch(updateProfile(combineData));
    }
  }, [isSubmit]);

  return (
    <Screen className="flex-1 mt-5 mx-2">
      {/* <AppHeader
        isBack={true}
        navigation={navigation}
        onPressBack={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      /> */}

      {/* Title */}
      <Title className="mb-4 text-center">Create Account</Title>

      {/* Steps */}
      <Subtitle className="mb-6 text-center">
        Step {currentStep} of {totalSteps}
      </Subtitle>

      {/* Progreess bar */}
      <View className="h-2 w-full bg-muted rounded-full mb-8 overflow-hidden">
        <View
          className="h-full bg-primary rounded-full"
          style={{width: `${progressPercentage}%`}}
        />
      </View>

      <View className="flex-1 w-full">
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={() => null}
        />
      </View>
    </Screen>
  );
};
