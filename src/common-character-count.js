const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = [];
  let arr2 = [];
  let sum = 0;
  arr1 = s1.split('');
  arr2 = s2.split('');
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        arr1.splice(i, 1);
        arr2.splice(j, 1);
        sum += 1;
        i -= 1;
        break;
      }
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
