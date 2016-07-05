import axios from 'axios';

const apiUtils = {
  getDates() {
    return axios.get('/api/events');
  },
  getDate(date) {
  	const request = (process.env.NODE_ENV ==='dev') ? 'http://0.0.0.0:3000/api/events/' + date : '/api/events/' + date;
    return axios.get(request);
  },
};

export default apiUtils;
