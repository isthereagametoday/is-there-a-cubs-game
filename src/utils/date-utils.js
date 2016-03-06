import axios from 'axios';

const dateUtils = {
  getDates() {
    return axios.get('/api/events');
  },
  getDate(date) {
    console.log(date);
    return axios.get('/api/events/' + date);
  },
};

export default dateUtils;
