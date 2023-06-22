const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
