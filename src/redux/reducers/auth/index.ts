import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {} from '../../../core/Authentication/Onboarding';

interface UserDetails {
  phone_number?:{
    callingCode?:string;
    phone?:string;
  }
  first_name?: string ;
  last_name?: string ;
  email?: string ;
  gender?: string ;
  date_of_birth?: string ;
  profile_image?: {uri?: string; name?: string; type?: string};
  education?: string ;
  address?: {
    address_line_1?: string ;
    address_line_2?: string ;
    city?: string ;
    state?: string ;
    country?: string ;
    pincode?: string ;
  };
}

interface AuthState {
  isOTPSent: boolean;
  isOTPVerified: boolean;
  token: string | null;
  error: string | null;
  isAuthenticated: boolean;
  accessTokenExpiry: number;
  signup: string | null;
}

const initialState: AuthState = {
  isOTPSent: false,
  isOTPVerified: false,
  token: null,
  error: null,
  isAuthenticated: false,
  accessTokenExpiry: 0,
  signup: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,

    sendotp: (
      state,
      action: PayloadAction<{phone_number: {phone:string,callingCode:string}; navigation?: any}>,
    ) => {
      state.isOTPSent = false;
      state.error = null;
    },

    sendOTPSuccess: (state, action: PayloadAction<{token: string}>) => {
      state.isOTPSent = true;
      state.token = action.payload.token;
      state.error = null;
    },

    sendOTPFailure: (state, action: PayloadAction<{error: string}>) => {
      state.isOTPSent = false;
      state.error = action.payload.error;
    },

    verifyotp: (
      state,
      action: PayloadAction<{code: string; token?: string;}>,
    ) => {
      state.isOTPVerified = false;
      state.error = null;
    },

    verifyOTPSuccess: (
      state,
      action: PayloadAction<{
        accessTokenExpiry: number;
      }>,
    ) => {
      state.isOTPVerified = true;
      state.isAuthenticated = true;
      state.error = null;
      state.accessTokenExpiry = action.payload.accessTokenExpiry;
    },

    verifyOTPFailure: (state, action: PayloadAction<{error: string}>) => {
      state.isOTPVerified = false;
      state.error = action.payload.error;
    },
    refreshToken: state => {},

    
    verifySuccess: (
      state,
      action: PayloadAction<{
        accessTokenExpiry: number;
      }>,
    ) => {
      state.isOTPVerified = true;
      state.error = null;
      state.accessTokenExpiry = action.payload.accessTokenExpiry;
    },
    isVerify: (state,action:PayloadAction<boolean>) => {
      state.isOTPVerified = action.payload;
      state.isOTPSent = action.payload;
    },
    // in currentUserSlice.ts
    updateProfile(state, action: PayloadAction<UserDetails>) {},
    updateProfileImage(state, action: PayloadAction<(UserDetails['profile_image'])>) {},
  },
});

export const {
  logout,
  updateProfile,
  sendotp,
  sendOTPSuccess,
  sendOTPFailure,
  verifyotp,
  verifyOTPSuccess,
  verifyOTPFailure,
  refreshToken,
  verifySuccess,
  isVerify,
  updateProfileImage
} = authSlice.actions;

export default authSlice.reducer;
