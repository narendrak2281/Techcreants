import {put, delay, select, takeLatest} from 'redux-saga/effects';
import {
  sendotp,
  sendOTPSuccess,
  verifyotp,
  verifyOTPFailure,
  logout,
  refreshToken,
  updateProfile,
  updateProfileImage,
  isVerify,
} from '.';
import {
  GET_USER_DETAILS,
  REFRESH_ACCESS_TOKEN,
  SEND_OTP,
  UPDATE_USER_DETAILS,
  VERIFY_OTP,
} from '../../../apiCalls/endpoints';
import type {SagaIterator} from 'redux-saga';
import {showErrorMessage, showSucessMessage} from '../../../common/utils';
import {TEN_MINUTES} from '../../../common/utils';
import {
  reset,
  setLoggedIn,
  setUserData,
  setUserDetails,
  setUserId,
  setUserType,
} from '../currentUser';
import {handleApiRequest} from '../../../apiCalls/handleSagaRequest';

// Worker Saga: Handles sending OTP
function* authSendotp(action: {
  type: string;
  payload: {
    phone_number?: {callingCode?: string; phone?: string};
    navigation?: any;
  };
}): SagaIterator {
  const {navigation, phone_number} = action.payload;
  const params = {
    phone_number: `${phone_number?.callingCode ?? ''}${
      phone_number?.phone ?? ''
    }`,
  };
  let isNew: boolean = !navigation;

  function* onSuccess(data: any) {
    console.log(data?.token);
    yield put(
      setUserDetails({
        phone_number: {
          phone: phone_number?.phone,
          callingCode: phone_number?.callingCode,
        },
      }),
    );
    if (isNew) {
      yield put(sendOTPSuccess({token: data?.token}));
    }
    navigation?.navigate('Verifyotp', {token: data?.token});
    showSucessMessage('OTP sent successfully');
  }
  function* onError() {
    showErrorMessage('Invalid Phone number');
  }

  yield* handleApiRequest('POST', SEND_OTP, params, onSuccess, onError);
}

function* fetchUserDetails(userId: string) {
  function* onSuccess(data: any) {
    yield put(setUserDetails(data));
  }
  function* onError() {
    showErrorMessage('Failed to fetch user details');
  }
  yield* handleApiRequest(
    'GET',
    `${GET_USER_DETAILS(userId)}`,
    {},
    onSuccess,
    onError,
  );
}

// Worker Saga: Handles OTP verification for sign-in
function* authVerifyotp(action: {
  type: string;
  payload: {code: string; token: string};
}): SagaIterator {
  const {code} = action.payload;
  let {token} = action.payload;
  let isNew: boolean = !token;
  if (isNew) {
    token = yield select(state => state?.auth?.token);
    isNew = true;
  }
  console.log('token is ', token);
  const params = {
    token: token,
    code: code,
  };

  function* onSuccess(data: any) {
    yield put(setUserData(data.user));
    if (isNew) {
      console.log('New User');
      yield put(isVerify(true));
    } else {
      console.log('Existing User');
      yield* fetchUserDetails(data.user.user_id);
      yield put(setLoggedIn(true));
    }
    yield put(setUserId(data.user.user_id));
    yield put(setUserType(data.user.user_type));
    showSucessMessage('OTP Verified!');
  }

  function* onError() {
    yield put(verifyOTPFailure({error: 'Invalid OTP'}));
    showErrorMessage('Invalid OTP');
  }

  yield* handleApiRequest('POST', VERIFY_OTP, params, onSuccess, onError);
}

// Worker Saga: Handles token refresh
function* handleTokenRefresh(): SagaIterator {
  function* onSuccess(data: any) {
    yield put(
      setUserData({
        access_token: data.access,
        refresh_token: data.refresh,
        access_time: data.access_time, // Optional if returned by backend
        refresh_time: data.refresh_time, // Optional if returned by backend
      }),
    );
  }

  function* onError() {
    console.error('Token refresh failed');
    showErrorMessage('Session expired. Please log in again.');
    yield put(reset());
  }

  while (true) {
    const accessTime: number = yield select(
      state => state.currentUser.userData?.access_time,
    );
    const refreshTime: number = yield select(
      state => state.currentUser.userData?.refresh_time,
    );
    const now = Date.now();

    const timeUntilRefresh = accessTime - TEN_MINUTES - now;

    // Access token not yet expired
    if (timeUntilRefresh > 0) {
      console.log('Waiting until access token is near expiry');
      yield delay(timeUntilRefresh);
    } else {
      // Access token expired, check refresh token
      if (refreshTime > now) {
        console.log('Access token expired, but refresh token still valid');
        const storedRefreshToken: string = yield select(
          state => state.currentUser.userData?.refresh_token,
        );

        if (!storedRefreshToken) {
          console.error('No refresh token found');
          yield put(reset());
          return;
        }

        yield* handleApiRequest(
          'POST',
          REFRESH_ACCESS_TOKEN,
          {refresh: storedRefreshToken},
          onSuccess,
          onError,
        );
      } else {
        console.warn('Refresh token expired too, logging out');
        yield put(reset());
        return;
      }
    }
  }
}

// Worker Saga: Handles profile update
function* updateProfileSaga(action: {
  type: string;
  payload: any;
}): SagaIterator {
  const params = action.payload;
  const userId = yield select(state => state?.currentUser?.userId);

  function* onSuccess(data: any) {
    yield put(setUserDetails(data));
    yield put(setLoggedIn(true));
    showSucessMessage('Profile updated successfully');
  }

  function* onError(error: any) {
    const message =
      error?.detail || 'An error occurred while updating your profile Image';
    showErrorMessage(message);
  }

  yield* handleApiRequest(
    'PATCH',
    `${UPDATE_USER_DETAILS(userId)}`,
    params,
    onSuccess,
    onError,
  );
}

// Worker Saga: Handles profile update
function* updateProfileImageSaga(action: {
  type: string;
  payload: {uri: string; type: string; name: string};
}): SagaIterator {
  const image = action.payload;
  const userId = yield select(state => state?.currentUser?.userId);
  const params = new FormData();
  params.append('profile_image', {
    uri: image.uri,
    type: image.type,
    name: image.name,
  });
  function* onSuccess(data: any) {
    yield put(setUserDetails({profile_image:{uri:data.profile_image}}));
    showSucessMessage('Profile Image updated successfully');
  }

  function* onError(error: any) {
    const message =
      error?.detail || 'An error occurred while updating your profile image';
    showErrorMessage(message);
  }

  yield* handleApiRequest(
    'PATCHUPLOAD',
    `${UPDATE_USER_DETAILS(userId)}`,
    params,
    onSuccess,
    onError,
  );
}

// Worker Saga: Handles logout
function* logoutSaga() {
  console.log('User logout successfully');
  yield put(reset());
}

// Watcher Saga: Listens for Authentication Actions
export function* watchAuthSaga() {
  yield takeLatest(sendotp.type, authSendotp);
  yield takeLatest(verifyotp.type, authVerifyotp);
  yield takeLatest(refreshToken.type, handleTokenRefresh);
  yield takeLatest(updateProfile.type, updateProfileSaga);
  yield takeLatest(updateProfileImage.type, updateProfileImageSaga);
  yield takeLatest(logout.type, logoutSaga);
}
