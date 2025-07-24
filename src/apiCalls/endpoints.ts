import {API_VERSION} from '../common/utils/constants';
// export const SEND_OTP = `/api/v${API_VERSION}/login`;
export const SEND_OTP = `/user/send-otp/`;
export const VERIFY_OTP = `/user/verify-otp/`;

export const REFRESH_ACCESS_TOKEN = `/api/token/refresh/`;
export const UPDATE_PROFILE = `/user/profile/`;
export const UPDATE_USER_DETAILS = (userId: any) =>
    `/api/users/${userId}/`;
export const GET_USER_DETAILS = (userId: any) =>
    `/api/users/${userId}/`;
export const GET_EVENT_DETAILS =`/api/events/`;
export const REGISTER_EVENT =`/api/events/registration/`;
export const MARK_ATTENDACE =`/api/events/attendance/`;





