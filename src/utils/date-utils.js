import moment from 'moment';
import tz from 'moment-timezone'; // eslint-disable-line no-unused-vars

const dateUtils = {
  getToday(format, strlength) {
    return moment().tz('America/Chicago').format(format).substr(0, strlength);
  },
};

export default dateUtils;
