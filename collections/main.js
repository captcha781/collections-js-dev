class Collections {
/**
 * This module is a implementation of python's collections
 * module the methods provided inside this module are guaranteed
 * to work as same as collecions module of Python
 */
  constructor() {}

  #counterString(iterable) {
    iterable = iterable.split("");
    return this.#counterArray(iterable);
  }

  #counterArray(iterable) {
    let iteratee = new Object;
    for (let i = 0; i < iterable.length; i++) {
      if (iteratee[iterable[i]]) {
        iteratee[iterable[i]] += 1
      }
      else {
        iteratee[iterable[i]] = 1
      }
    }
    return iteratee
  }

/**
 * @param {string} iterable The string
 * @param {Array} iterable the Array
 */
  counter(iterable) {
    if (typeof iterable === "string") {
      return this.#counterString(iterable);
    }
    else if (typeof iterable === "object") {
      return this.#counterArray(iterable)
    }
    else {
      return TypeError(`Need String or Array got ${typeof iterable}`)
    }
  }
}

module.exports = Collections;
