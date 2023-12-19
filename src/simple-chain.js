const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  link: [],

  getLength() {
    return this.link.length;
  },
  addLink(value = `( )`) {
    this.link.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === `number` && position > 0 && position <= this.link.length && isNaN(position) !== true) {
      this.link.splice(position - 1, 1);
      return this;
    } else {
      this.link = [];
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.link.reverse();
    return this;
  },
  finishChain() {
    let a = this.link.join(`~~`);
    this.link = [];
    return a;
  }
};

module.exports = {
  chainMaker
};
