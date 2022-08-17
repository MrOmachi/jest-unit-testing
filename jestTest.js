const jestTest = {
  stringLength: (string) => {
    if (string.length > 0 && string.length <= 10) {
      return string.length;
    } else {
      return 'Error';
    }
  },

  reverseString: (string) => string.split('').reverse().join(''),

  capitalize: (string) => {
    const temp = string.charAt(0).toUpperCase() + string.slice(1);
    return temp;
  },
};

const calculator = {
  add: (a, b) => {
    return a + b;
  },

  sub: (a, b) => {
    return a - b;
  },

  div: (a, b) => {
    return a / b;
  },

  mult: (a, b) => {
    return a * b;
  },
};

module.exports = { jestTest, calculator };
