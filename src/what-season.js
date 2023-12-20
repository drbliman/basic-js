const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return `Unable to determine the time of year!`;
  }
  if ((!Date.parse(date)) ) {
    throw Error('Invalid date!');
  };
  if (!(date instanceof Date) ) {
    throw Error('Invalid date!');
  };
  if (Object.getOwnPropertyNames(date).length) {
    throw Error('Invalid date!');
  };
  let arr = [];
  arr = String(date).split(' ');
  if (arr[1] === `Jan` || arr[1] === `Feb` || arr[1] === `Dec`) {
    return `winter`
  }
  if (arr[1] === `Mar` || arr[1] === `Apr` || arr[1] === `May`) {
    return `spring`
  }
  if (arr[1] === `Jun` || arr[1] === `Jul` || arr[1] === `Aug`) {
    return `summer`
  }
  if (arr[1] === `Sep` || arr[1] === `Oct` || arr[1] === `Nov`) {
    return `autumn`
  }
  return 'Unable to determine the time of year!'
}

module.exports = {
  getSeason
};
