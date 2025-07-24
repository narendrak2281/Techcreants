import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Event} from '../../../core/Main/Home/type';

interface Events {
  eventDetails?: Event[];
  loading: boolean;

}

const initialState: Events = {
  eventDetails: [],
  loading: false,
};

const event = createSlice({
  name: 'event',
  initialState,
  reducers: {
    fetchEventRequest(state) {},
    setEventDetails: (state, action: PayloadAction<Event[]>) => {
      state.eventDetails = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    
    eventRegisterRequest(state, action: PayloadAction<{event_id?: number}>) {},
    markAttendanceRequest(state, action: PayloadAction<{event_id?: number}>) {},
    markQrCodeAttendanceRequest(state, action: PayloadAction<{event_id?: number,event_coordinator_id?:number}>) {},
  },
});

export const {
  fetchEventRequest,
  setEventDetails,
  setLoading,
  eventRegisterRequest,
  markAttendanceRequest,
  markQrCodeAttendanceRequest
  
} = event.actions;

export default event.reducer;
