import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface UserDetails {
  // phone?:string;
  phone_number?: {
    callingCode?: string;
    phone?: string;
  };
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: string;
  date_of_birth?: string;
  profile_image?: {uri: string; name?: string; type?: string};
  education?: string;
  profession?: string;
  address?: {
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;
  };
}
export interface UserData {
  access_token?: string;
  refresh_token?: string;
  access_time?: number;
  refresh_time?: number;
  user_id?: string;
  user_type?: string;
}

interface UserState {
  userDetails: UserDetails;
  userData: UserData;
  loggedIn: boolean;
  loading: boolean;
  userType: string;
  userId: string;
}

const initialState: UserState = {
  userDetails: {},
  userData: {},
  loggedIn: false,
  loading: false,
  userType: '',
  userId: '',
};

const currentUser = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setUserData(state, action: PayloadAction<UserData>) {
      state.userData = {...state.userData, ...action.payload};
    },
    setUserType(state, action: PayloadAction<string>) {
      state.userType = action.payload?.toUpperCase();
    },
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    setUserDetails(state, action: PayloadAction<UserDetails>) {
      state.userDetails = {...state.userDetails, ...action.payload};
    },
    reset(state) {
      state.userData = {};
      state.loggedIn = false;
      state.loading = false;
    },
  },
});

export const {
  setLoggedIn,
  setUserData,
  setUserType,
  setUserId,
  setLoading,
  setUserDetails,
  reset,
} = currentUser.actions;

export default currentUser.reducer;
