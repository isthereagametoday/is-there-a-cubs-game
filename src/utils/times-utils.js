const timesUtils = {
  getTimes(status) {
  	let result = '';
  	const times = status.length;
  	times.forEach(t => {
    	result = (result === '') ? t.eventTime : `${result} and ${t.eventTime}`;
  	});
  return result;
  },
};

export default timesUtils;
