const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let a = null;
  let sum = 1;
  let arr = [];
  let arr1 = [];
  arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      sum += 1;
    }
    if (arr[i] !== arr[i + 1]) {
      a = arr[i];
      if (sum > 1) {
        arr1.push(sum);
        sum = 1;
      }
      arr1.push(a);
    }
  }
  return arr1.join('');
}

module.exports = {
  encodeLine
};
