const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let str1 = null;
  let str2 = null;
  str1 = `${str}`;
  if (options.addition !== undefined) {
    for (let i = 0; i < (options.additionRepeatTimes !== undefined ? options.additionRepeatTimes: 1); i++) {
      str1 = str1 + options.addition;
      if (i < options.additionRepeatTimes - 1) {
        if (options.additionSeparator !== undefined) {
          str1 = str1 + options.additionSeparator;
        } else {
          str1 = str1 + '|';
        }
      }
    }
  }
  if (options.separator !== undefined) {
    str2 = options.separator + str1;
  } else {
    str2 = '+' + str1;
  }
  str1 = str1 + (str2.repeat(options.repeatTimes - 1));
  return str1;
}

module.exports = {
  repeater
};
