import {ImageSourcePropType} from 'react-native';

export type BasicInfo = {
  firstName?: string | undefined;
  lastName?: string | undefined;
  education?: string | undefined;
  profession?: string | undefined;
  phone?: string | undefined;
  callingCode?: string | undefined;
  profileImage?: {uri: string; name?: string; type?: string};
};
