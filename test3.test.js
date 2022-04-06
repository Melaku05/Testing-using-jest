const Calculator = require('./test3');

const cal = new Calculator();
cal.a = 10;
cal.b = 5;
describe('testing calculator class', () => {
  test('test add function', () => {
    expect(cal.add()).toBe(15);
  });

  test('test add function', () => {
    expect(cal.substract()).toBe(5);
  });

  test('test add function', () => {
    expect(cal.multiple()).toBe(50);
  });

  test('test add function', () => {
    expect(cal.division()).toBe(2);
  });
});
