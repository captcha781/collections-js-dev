const dupeRemover = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

/**
 * @param {Object} args the Objects
 * Example :
 *@example chainMap({obj1}, {obj2},...) returns Array [keys of the objects]
 */
exports.chainMap = (...args) => {
  try {
    const retArr = [];
    for (let i in args) {
      let keys = Object.keys(args[i]);
      for (let j in keys) {
        retArr.push(keys[j]);
      }
    }
    return dupeRemover(retArr);
  } catch (error) {
    console.log(error);
  }
};
