const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let arr1 = [];
  let a = String(n);
  for (let i = 0; i < a.length; i++) {
    arr1 = a.split('');
    arr1.splice(i, 1);
    arr.push(Number(arr1.join('')));
  }
  arr.sort(function (a, b) {
    return b - a
  })
  return arr[0];
}

module.exports = {
  deleteDigit
};
