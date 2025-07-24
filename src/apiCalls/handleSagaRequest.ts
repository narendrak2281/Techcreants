import {put, call} from 'redux-saga/effects';
import {setAppLoader} from '../redux/reducers/appLoader';
import {AXIOS_AUTH_KIT} from './apiService';
import {showErrorMessage} from '../common/utils'; // <-- import your toast

export function* handleApiRequest<T>(
  method: string,
  endpoint: string,
  params: any = {},
  successCallback: (response: T, status: number) => Generator<any, any, any>,
  errorCallback?: (status?: number) => Generator<any, any, any>,
): Generator<any, any, any> {
  try {
    yield put(setAppLoader(true));

    const response: {data: T; status: number} = yield call(
      AXIOS_AUTH_KIT,
      method,
      endpoint,
      params,
    );

    if (response?.status >= 200 && response?.status <= 204) {
      yield* successCallback(response.data, response.status);
    } else {
      if (errorCallback) {
        yield* errorCallback(response?.status);
      } else {
        yield call(showErrorMessage, 'Something went wrong!');
      }
    }
  } catch (error: any) {
    if (errorCallback) {
      yield* errorCallback();
    } else {
      yield call(showErrorMessage, error?.message || 'Network error');
    }
  } finally {
    yield put(setAppLoader(false));
  }
}
