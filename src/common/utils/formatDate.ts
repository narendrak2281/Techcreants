import moment from 'moment';

export type DateFormat =
  | 'date'
  | 'dateHiphon'
  | 'time'
  | 'datetime'
  | 'timedate'
  | 'dateTime'
  | 'day'
  | 'string'
  | 'utcToLocalTimedate'
  | 'eventdate'
  | 'staticTime';

const formatTime = (time: string = '14:00'): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
};

export const parseMoment = (dateStr: string|Date, timeStr?: string): moment.Moment => {
  const [hour, minute] = timeStr?.split(':').map(Number) ?? [0, 0];
  return moment(dateStr).set({ hour, minute, second: 0, millisecond: 0 });
};

export const formatDate = (date: Date | string, format: DateFormat): string => {
  try {
    if (format === 'staticTime' && typeof date === 'string') {
      return formatTime(date); // Use your custom logic here
    }

    const m = moment(date);
    switch (format) {
      case 'date':
        return m.format('DD MMM YYYY');
      case 'dateHiphon':
        return m.format('YYYY-MM-DD');
      case 'time':
        return m.format('hh:mm A');
      case 'datetime':
        return m.format('DD MMM YYYY LT');
      case 'timedate':
        return m.format('LT, DD MMM YYYY');
      case 'dateTime':
        return m.format('DD MMM YYYY HH:mm:ss');
      case 'day':
        return m.format('dddd');
      case 'string':
        return m.format('YYYY-MM-DDTHH:mm:ss[Z]');
      case 'utcToLocalTimedate':
        return moment.utc(date).local().format('hh:mm A, DD MMM YYYY');
      case 'eventdate':
        return m.format('ddd, MMM DD, YYYY');
      default:
        return m.format();
    }
  } catch (err) {
    console.error(
      'formatDate in src/common/utils/formatDate.tsx failed with error -> ',
      err,
    );
    return '';
  }
};
