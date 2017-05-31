const timesUtils = {
  getTimes(status) {
  	let result = '';
  	const times = Array.isArray(status.val()) ? status.val() : Array.of(status.val());
  	times.forEach(t => {
    	result = (result === '') ? t.eventTime : `${result} and ${t.eventTime}`;
  	});
  return result;
  },
};

export default timesUtils;
