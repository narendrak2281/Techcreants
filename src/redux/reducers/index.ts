import {combineReducers} from '@reduxjs/toolkit';
import appLoader from './appLoader';
import authSlice from './auth';
import currentUser from '../reducers/currentUser';
import event from '../reducers/event';

import {all} from 'redux-saga/effects';
import {watchAuthSaga} from './auth/action';
import  {watchEventSaga} from './event/action';

const rootReducer = combineReducers({
  appLoader: appLoader,
  auth: authSlice,
  currentUser: currentUser,
  event:event
});

function* rootSaga() {
  console.log('rootSaga started');
  yield all([watchAuthSaga(),watchEventSaga()]);
  console.log('rootSaga ended');
}

export {rootReducer, rootSaga};
