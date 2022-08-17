const { jestTest, calculator } = require('./jestTest');

test('check if string is at least 1 character long and not longer than 10 characters', () => {
  const string = 'testing';
  expect(jestTest.stringLength(string)).toBe(7);
});

test('throw error for longer digits', () => {
  const string = 'testingstinglongerlegnth';
  expect(jestTest.stringLength(string)).toBe('Error');
});

test('Reverse the string', () => {
  const string = 'hello';
  expect(jestTest.reverseString(string)).toBe('olleh');
});

const clac = () => console.log('Calculating value...');
describe('Calculating', () => {
  beforeEach(() => clac());

  test('add a + b', () => {
    const sum = 3 + 4;
    expect(calculator.add(3, 4)).toBe(sum);
  });

  test('substract a - b', () => {
    const sub = 7 - 3;
    expect(calculator.sub(7, 3)).toBe(sub);
  });

  test('divide a / b', () => {
    const div = 8 / 4;
    expect(calculator.div(8, 4)).toBe(div);
  });

  test('mult a * b', () => {
    const mult = 2 * 3;
    expect(calculator.mult(2, 3)).toBe(mult);
  });
});

test('string capitalize', () => {
  const string = 'hello';
  expect(jestTest.capitalize(string)).toBe('Hello');
});
