import axios from 'axios';
import moment from 'moment';
import tz from 'moment-timezone'; // eslint-disable-line no-unused-vars

const dateUtils = {
  getDates() {
    return axios.get('/api/events');
  },
  getDate(date) {
    return axios.get(`/api/events/${date}`);
  },
  getToday(format) {
    return moment().tz('America/Chicago').format(format);
  },
};

export default dateUtils;
