import axios from 'axios';

const apiUtils = {
  getDate(date) {
  	const request = '/' + date;
    return axios.get(request);
  },
};

export default apiUtils;
