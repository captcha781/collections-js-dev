const { chainMap } = require("./ChainMap");
const { counter } = require("./Counter");

class Collections {
  /**
   * This module is a implementation of python's collections
   * module the methods provided inside this module are guaranteed
   * to work as same as collecions module of Python
   */
  constructor() {
    this.chainMap = chainMap;
    this.counter = counter;
  }
}

module.exports = Collections;
