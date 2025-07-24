import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { useSelector } from 'react-redux';
import {Colors} from '../../styles/Colors'; // Only used for color reference if needed
import { useAppSelector } from '../../../redux/store';

export const Apploader = (Component: any) => ({ ...props }) => {
  const { isLoading } = useAppSelector(state => state.appLoader)

  return (
    <>
      <Component {...props} />
      {isLoading ? (
        <Modal transparent visible={isLoading} statusBarTranslucent>
          <View className="flex-1 items-center justify-center bg-black/60">
            <ActivityIndicator color={Colors.white} size="large" />
          </View>
        </Modal>
      ) : null}
    </>
  );
};

