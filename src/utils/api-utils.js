import axios from 'axios';

const apiUtils = {
  getDates() {
    return axios.get('/api/events');
  },
  getDate(date) {
    return axios.get(`/api/events/${date}`);
  },
};

export default apiUtils;
