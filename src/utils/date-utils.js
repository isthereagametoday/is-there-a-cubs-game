import axios from 'axios';

const dateUtils = {
  getDates() {
    return axios.get('/api/events');
  },
};

export default dateUtils;
