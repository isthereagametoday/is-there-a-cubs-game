const timesUtils = {
  getTimes(status) {
  	let result = '';
  	const times = (status !== {}) ? status.data[0].eventTime.split(',') : [];
  	times.forEach(t => {
    	result = (result === '') ? t : `${result} and ${t}`;
  	});
  return result;
  },
};

export default timesUtils;
