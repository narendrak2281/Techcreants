import React from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import {
  Title,
  Subtitle,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '../../../../common/components';
import {EditableInput} from './EditableInput';
import {cn} from '../../../../common/utils';
import {BasicInfo} from '../type';
import Images from '../../../../common/styles/images';
import {Camera} from '../../../../assets/icons';
import {
  launchImageLibrary,
  launchCamera,
  OptionsCommon,
} from 'react-native-image-picker';

type Props = {
  isEdit: boolean;
  className?: string;
  input?: BasicInfo;
  setInput?: (name: string, value: string | null) => void;
};

export const ProfileAvatarWithName = ({
  input,
  setInput,
  isEdit,
  className,
}: Props) => {
  if (!input) return null;

  const normalizedProfileImage =
  typeof input.profileImage === 'string'
    ? input.profileImage
    : input.profileImage?.uri;

  const handleInputChange = (name: string, value: any) => {
    console.log('Its clicked');
    if (setInput) {
      setInput(name, value);
    }
  };
  const openImagePicker = () => {
    const options: OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        const asset = response.assets?.[0];

        if (asset) {
          const imageData= {
            uri:asset.uri,
            type: asset.type,
            name: asset.fileName,
          };
          handleInputChange('profileImage', imageData); // send whole object
        }
      }
    });
  };

  return (
    <View
      className={cn('flex-row gap-6 justify-center items-center', className)}>
      <View className="relative">
        <Avatar
          className={cn(
            'border border-primary/40 p-0.5',
            isEdit ? 'w-32 h-32' : 'w-24 h-24',
          )}
          alt={`${input.firstName} ${input.lastName}`}>
          <AvatarImage
            source={{uri:normalizedProfileImage}}
          />
          <AvatarFallback>
            <Title>
              {input.firstName?.[0]}
              {input.lastName?.[0]}
            </Title>
          </AvatarFallback>
        </Avatar>
        {isEdit && (
          <TouchableOpacity
            className="absolute bottom-2 right-2 p-2 bg-background rounded-full"
            style={{
              elevation: 4, // for Android shadow
              shadowColor: '#000', // for iOS shadow
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.3,
              shadowRadius: 1,
            }}
            onPress={() => openImagePicker()}>
            <Camera size={24} className="color-primary" />
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-1 items-start gap-2">
        {isEdit ? (
          <>
            <TextInput
              value={input.firstName}
              onChangeText={text => handleInputChange('firstName', text)}
              className="border-b border-primary w-full font-body text-foreground text-xl pt-0 pb-0"
              autoComplete="given-name"
              autoCapitalize="words"
            />
            <TextInput
              value={input.lastName}
              onChangeText={text => handleInputChange('lastName', text)}
              className="border-b border-primary w-full font-body text-foreground text-xl pt-0 pb-0"
              autoComplete="family-name"
              autoCapitalize="words"
            />
          </>
        ) : (
          <Title className="text-xl">
            {input.firstName} {input.lastName}
          </Title>
        )}
        <Subtitle>
          {input.callingCode} {input.phone}
        </Subtitle>
      </View>
    </View>
  );
};
