// eventHelpers.ts
import moment from 'moment';
import {parseMoment} from './'; // adjust path as needed
import { Event } from '../../core/Main/Home/type';

export const canAttendEvent = (event: Event): boolean => {
  if (!event?.start_time || !event?.end_time || !event?.end_date) return false;

  const now = moment();
  const eventDate = parseMoment(event.end_date, event.end_time);
  

  if (now.isAfter(eventDate)) return false;

  const isSameDay = now.isSame(eventDate, 'day');

  const startTime = parseMoment(event.end_date, event.start_time);
  const endTime = parseMoment(event.end_date, event.end_time);

  return isSameDay && now.isBetween(startTime, endTime, undefined, '[]');
};

export const getNormalizedImage = (feature_image: any): string | undefined => {
  if (!feature_image) return undefined;

  if (typeof feature_image === 'string') return feature_image;

  return feature_image.uri;
};
