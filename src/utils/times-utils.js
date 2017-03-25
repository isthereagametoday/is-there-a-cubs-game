const timesUtils = {
  getTimes(status) {
  	let result = '';
  	const times = status.data.eventTime.split(',');
  	times.forEach(t => {
    	result = (result === '') ? t : `${result} and ${t}`;
  	});
  return result;
  },
};

export default timesUtils;
