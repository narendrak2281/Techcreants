import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppLoader {
  isLoading: boolean;
}

const initialState: AppLoader = {
  isLoading: false,
};

const appLoader = createSlice({
  name: 'appLoader',
  initialState,
  reducers: {
    setAppLoader: (state, action:PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setAppLoader} = appLoader.actions;
export default appLoader.reducer;
