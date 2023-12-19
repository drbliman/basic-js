const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let names1 = names;
  let name1 = null;
  let n = 1;
  for (let i = 0; i < names1.length; i++) {
    name1 = names1[i];
    for (let j = i + 1; j < names1.length; j++) {
      if(names1[j] === name1) {
        names1[j] = `${names1[j]}(${n})`;
        n += 1;
      }
      if (j === names1.length - 1) {
        n = 1;
      }
    }
  }
  return names1;
}

module.exports = {
  renameFiles
};
