import axios from 'axios';
import {store} from '../redux/store';
import {BASE_URL} from './config';

export const AXIOS_AUTH_KIT = async (
  method: string,
  endPoint: string,
  data?: any,
) => {
  const {userData}: any = store.getState().currentUser;
  const token = userData?.access_token;

  // Check if the current request is for refreshing the token
  const isRefreshing = endPoint.includes('/api/token/refresh/');

  // Set headers: skip Authorization if refreshing token
  const header = {
    'Content-Type': 'application/json',
    ...(!!token && !isRefreshing && { Authorization: `Bearer ${token}` }),
  };

  const headerFileupload = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    ...(!!token && !isRefreshing && { Authorization: `Bearer ${token}` }),
  };

  const auth = axios.create({
    baseURL: BASE_URL,
    headers: method === 'POSTUPLOAD' || method === 'PATCHUPLOAD'  ? headerFileupload : header,
  });

  // Logging requests
  auth.interceptors.request.use(
    request => {
      console.log('START REQUEST:', JSON.stringify(request));
      return request;
    },
    error => {
      console.error('REQUEST ERROR:', error);
      return Promise.reject(error);
    }
  );

  // Logging responses
  auth.interceptors.response.use(
    response => {
      console.log('START RESPONSE:', JSON.stringify(response));
      return response;
    },
    error => {
      // console.error('RESPONSE ERROR:', error?.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  let res: any;

  try {
    switch (method) {
      case 'POST':
      case 'POSTUPLOAD':
        res = await auth.post(endPoint, data);
        break;
      case 'GET':
        res = await auth.get(endPoint);
        break;
      case 'PUT':
        res = await auth.put(endPoint, data);
        break;
      case 'PATCH':
      case 'PATCHUPLOAD':
        res = await auth.patch(endPoint, data);
        break;
      case 'DELETEFILE':
        res = await auth.delete(endPoint, data);
        break;
      case 'DELETE':
        res = data
          ? await auth.delete(endPoint, {data})
          : await auth.delete(endPoint);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
    return res;
  } catch (e: any) {
    // log specific error for refresh token
    if (isRefreshing) {
      console.error("Token refresh failed:", e?.response?.data || e.message);
    }
    return e?.response || {status: 500, data: {message: 'Unknown error'}};
  }
};
