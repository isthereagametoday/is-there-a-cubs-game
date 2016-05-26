import axios from 'axios';

const apiUtils = {
  getDates() {
    return axios.get('/api/events');
  },
  getDate(date, instance) {
  	const requ = instance ? instance + '/api/events/' + date : '/api/events/' + date;
    return axios.get(requ);
  },
};

export default apiUtils;
