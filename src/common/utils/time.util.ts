import moment from 'moment';

export class TimeUtils {
  static convertTimestampTime(timestamp: number) {
    const currentTime = this.currentTimestamp();
    const remainingTime = timestamp - currentTime;
    const formattedTime = moment(remainingTime).format('mm:ss');
    return formattedTime;
  }
  static currentTimestamp() {
    return Math.floor((new Date().getTime() / 1000) % 1000);
  }

  static formatFromNow(time: Date | string): string {
    moment.updateLocale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'seconds',
        ss: '%ss',
        m: 'a min',
        mm: '%dmin',
        h: 'an hour',
        hh: '%dh',
        d: 'a day',
        dd: '%dd',
        M: 'a month',
        MM: '%dM',
        y: 'a year',
        yy: '%dY'
      }
    });
    return moment(time).fromNow();
  }

  static formatTimeOrDate(inputDate: Date | string): string {
    const dateToFormat = moment(new Date(inputDate));
    const today = moment();
    if (dateToFormat.isSame(today, 'day')) {
      return dateToFormat.format('HH:mm');
    }
    return dateToFormat.format('DD/MM/YYYY');
  }
}
