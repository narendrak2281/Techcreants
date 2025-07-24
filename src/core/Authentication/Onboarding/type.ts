import {Route} from 'react-native-tab-view';

type basic = {
  firstName: string;
  lastName: string;
  email: string;
  education: string;
  profession: string;
  dob: Date|null;
};
 
type address = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};

type BasicDetailsProps = {
  routes: Route[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  inputs: basic;
  setInputs: React.Dispatch<React.SetStateAction<basic>>;
};

type AddressDetailsProps = {
  routes: Route[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  inputs: address;
  setInputs: React.Dispatch<React.SetStateAction<address>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

export type {BasicDetailsProps, AddressDetailsProps,basic,address};
