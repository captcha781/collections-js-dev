const counterString = (iterable) => {
  iterable = iterable.split("");
  return counterArray(iterable);
};

const counterArray = (iterable) => {
  let iteratee = new Object();
  for (let i = 0; i < iterable.length; i++) {
    if (iteratee[iterable[i]]) {
      iteratee[iterable[i]] += 1;
    } else {
      iteratee[iterable[i]] = 1;
    }
  }
  return iteratee;
};

/**
 * @param {string} iterable The string
 * @param {Array} iterable the Array
 */
exports.counter = (iterable) => {
  if (typeof iterable === "string") {
    return counterString(iterable);
  } else if (typeof iterable === "object") {
    return counterArray(iterable);
  } else {
    return TypeError(`Need String or Array got ${typeof iterable}`);
  }
};
