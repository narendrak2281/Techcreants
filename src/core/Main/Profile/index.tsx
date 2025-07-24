import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Button,
  Heading,
  Screen,
  Subtitle,
  Text,
  Title,
} from '../../../common/components';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {logout, updateProfile, updateProfileImage} from '../../../redux/reducers/auth';
import {
  LogOut,
  Education,
  Profession,
} from '../../../assets/icons';
import {EditableInput} from './Components/EditableInput';
import {HeaderWithEditToggle} from './Components/HeaderWithEditToggle';
import {ProfileAvatarWithName} from './Components/ProfileAvatarWithName';
import {BasicInfo} from './type';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const {userDetails} = useAppSelector(state => state.currentUser);

  const [localInputs, setLocalInputs] = useState<BasicInfo>({
    firstName: userDetails.first_name,
    lastName: userDetails.last_name,
    education: userDetails.education,
    profession: userDetails.profession,
    phone: userDetails.phone_number?.phone,
    callingCode: userDetails.phone_number?.callingCode,
    profileImage:userDetails.profile_image
  });

  const combineData = {
    first_name: localInputs.firstName,
    last_name: localInputs.lastName,
    education: localInputs.education,
    profession: localInputs.profession,
    // profile_image:localInputs.profileImage,
  }
  console.log(userDetails)

  const handleInputChange = (name: string, value: string | Date | null) => {
    setLocalInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEdit(true);
  };
const handleSave = async () => {
  console.log('Save click');
  console.log('Main Component', localInputs.profileImage);
  
  dispatch(updateProfile(combineData));
  if(localInputs.profileImage) {
    dispatch(updateProfileImage(localInputs.profileImage));
  }
  
  setIsEdit(false);
};


  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Screen className="mt-5 mx-2 pb-0" scrollable>
      <HeaderWithEditToggle
        isEdit={isEdit}
        onEdit={handleEdit}
        onSave={handleSave}
        title="Profile"
        className="mb-8"
      />
      <ProfileAvatarWithName
        isEdit={isEdit}
        className="mb-12"
        input={localInputs}
        setInput={handleInputChange}
      />

      <Heading className="text-start mb-8">Personal Information</Heading>
      <View className="flex mb-14 gap-8">
        <EditableInput
          icon={Education}
          label="Education"
          isEdit={isEdit}
          value={localInputs.education}
          onChangeText={text => handleInputChange('education', text)}
        />

        <EditableInput
          icon={Profession}
          label="Profession"
          isEdit={isEdit}
          value={localInputs.profession}
          onChangeText={text => handleInputChange('profession', text)}
        />
      </View>


      <Button
        onPress={handleLogout}
        variant="destructive"
        className="flex-row gap-2 bg-destructive"
      >
        <LogOut className="color-destructive-foreground" />
        <Text>Sign Out</Text>
      </Button>
    </Screen>
  );
};
