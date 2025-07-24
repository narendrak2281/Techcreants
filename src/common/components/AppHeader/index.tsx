import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ArrowLeft, Edit, Settings} from '../../../assets/icons';
import {Text} from '../Text';
import {cn, getAvatarSource} from '../../utils';
import {useAppSelector} from '../../../redux/store';

interface AppHeaderProps {
  pageTitle?: string;
  containerStyle?: string;
  isBack?: boolean;
  logoIcon?: any;
  navigation?: any;
  onPressBack?: () => void;
  onPressEdit?: () => void;
  headerStyle?: string;
  titleTextStyle?: string;
  logoStyle?: string;
  isEdit?: boolean;
  isRightIcon?: boolean;
  isSettingIcon?: boolean;
  rightIcon?: React.ReactNode;
  handleSettings?: () => void;
}

export const AppHeader: React.FunctionComponent<AppHeaderProps> = ({
  pageTitle,
  containerStyle,
  isBack,
  navigation,
  onPressBack,
  onPressEdit,
  isEdit = false,
  logoStyle,
  headerStyle,
  titleTextStyle,
  isRightIcon,
  isSettingIcon,
  rightIcon,
  handleSettings,
}) => {
  const {userDetails, userType}: any = useAppSelector(
    state => state.currentUser,
  );

  return (
    <View className={cn('w-full bg-overlay  mb-2', containerStyle)}>
      <View className={cn('flex-row items-center justify-between pt-4 pb-2', headerStyle)}>
        {isBack ? (
          <View className="flex-row my-1 items-center gap-2">
            <TouchableOpacity onPress={onPressBack}>
              <ArrowLeft className='color-foreground' />
            </TouchableOpacity>
            <Text
              className={cn('text-foreground text-2xl font-normal', titleTextStyle)}>
              {pageTitle}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            className="rounded-full border-2 border-ring overflow-hidden">
            <Image
              source={getAvatarSource(
                userDetails?.avatar,
                userDetails?.patient_details?.gender,
              )}
              className={cn('w-20 h-20 rounded-full object-cover', logoStyle)}
            />
          </TouchableOpacity>
        )}

        <View className="flex-row items-center gap-3">
          {isEdit && (
            <TouchableOpacity
              onPress={onPressEdit}
              className="flex-row items-center py-1 px-1 rounded-lg">
              <Text className="text-foreground text-xl font-body mr-2">
                Edit
              </Text>
              <Edit className='color-foreground' />
            </TouchableOpacity>
          )}
          {isRightIcon && (
            <TouchableOpacity className="items-center justify-center">
              {rightIcon}
            </TouchableOpacity>
          )}
          {isSettingIcon && (
            <TouchableOpacity
              onPress={handleSettings}
              className="rounded-full items-center justify-center">
              <Settings className='color-foreground'/>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
AppHeader.displayName = 'AppHeader';
