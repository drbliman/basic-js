const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1 = arr;
  let ind = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.indexOf(-1) !== -1) {
      ind.push(arr1.indexOf(-1));
      arr1[arr1.indexOf(-1)] = undefined;
      i -= 1;
    }
  }
  arr.sort(function (a, b) {
    return a - b
  })
  arr1.splice(arr1.length - ind.length, ind.length);
  for (let i = 0; i < ind.length; i++) {
    arr1.splice(ind[i], 0, -1);
  }
  return arr1;
}

module.exports = {
  sortByHeight
};
