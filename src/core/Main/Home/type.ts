export type RegistrationStatus =
  | 'REGISTER'
  | 'REGISTERED'
  | 'AWAITING_APPROVAL'
  | 'ATTENDED';

export interface Event {
  id?: number;
  title?: string;
  description?: string;
  location?: string;
  status?: string;
  end_date?: Date;
  start_time?: string;
  end_time?: string;
  isRegistered?: boolean;
  isAttended?: boolean;
  allow_attendance?: boolean;
  registration_status?: RegistrationStatus;
  feature_image?: {uri?: string; name?: string; type?: string};
}
