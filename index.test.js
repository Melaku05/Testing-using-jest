const { stringLength, reverseString } = require('./index');
const Calculator = require('./test3');
test('count this "hello" word', () => {
  expect(stringLength('hello')).toBe(5);
});
test('reverse this "hello" will be come', () => {
  expect(reverseString('hello')).toBe('olleh');
});
