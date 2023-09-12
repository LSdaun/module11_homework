const createAdder = require('./sum');

describe('createAdder', () => {
  it('should return a function', () => {
    expect(typeof createAdder(2)).toBe('function');
  });

  it('should return the sum of a and b', () => {
    const addTwo = createAdder(2);
    expect(addTwo(3)).toBe(5);
  });

  it('should throw an error if a is not a number', () => {
    expect(() => createAdder('2')).toThrow(TypeError);
  });
});