var moment = require('moment');
var tz = require('moment-timezone'); // eslint-disable-line no-unused-vars

const dateUtils = {
  getToday(format, strlength) {
    return moment().tz('America/Chicago').format(format).substr(0, strlength);
  },
};

module.exports = dateUtils;
