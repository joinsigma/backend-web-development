export const add = (num1, num2) => {
  return num1 + num2;
};

export const multiply = (num1, num2) => {
  return num1 * num2;
};

export const sumArray = (arr) => {
  return arr.reduce((prev, cur) => prev + cur);
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
