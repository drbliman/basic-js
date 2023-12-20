const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let arr1 = [];
  arr1 = arr;
  if (Array.isArray(arr) === true) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === '--discard-prev') {
        if (arr1[i - 1] !== undefined) {
          arr1[i - 1] = undefined;
          arr1[i] = undefined;
        } else {
          arr1[i] = undefined;
        }
        i --;
      }
      if (arr1[i] === '--double-prev') {
        if (arr1[i - 1] !== undefined) {
          arr1[i] = arr1[i - 1];
        } else {
          arr1[i] = undefined;
        }
        i --;
      }
      if (arr[i] === '--discard-next') {
        if (arr1[i + 1] !== undefined) {
          arr1[i] = undefined;
          arr1[i + 1] = undefined;
        } else {
          arr1[i] = undefined;
        }
        i --;
      }
      if (arr[i] === '--double-next') {
        if (arr1[i + 1] !== undefined) {
          arr1[i] = arr1[i + 1];
        } else {
          arr1[i] = undefined;
        }
        i --;
      }
    }
  } else {
      throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === undefined) {
      arr1.splice(i, 1);
      i--;
    }
  }
  return arr1;
}

module.exports = {
  transform
};
