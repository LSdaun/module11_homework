function createAdder(a) {
  if (typeof a !== 'number' || isNaN(a)) {
    throw new TypeError('a should be a number');
  };
  return function addA(b) {
    return a + b;
  };
};
module.exports = createAdder;