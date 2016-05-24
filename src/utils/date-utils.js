import moment from 'moment';
import tz from 'moment-timezone'; // eslint-disable-line no-unused-vars

const dateUtils = {
  getToday(format) {
    return moment().tz('America/Chicago').format(format);
  },
  getDate() {
    return moment().tz('America/Chicago').substr(0, 10);
  },
};

export default dateUtils;
