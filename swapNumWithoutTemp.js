// How would you swap two numbers without using a temporary variable?

function swapNum(a, b) {
  b = b - a;
  a = a + b;
  b = a - b;
  return [a, b];
}

console.log(swapNum(2, 3));

// using ES6

function swapN(a, b) {
  [a, b] = [b, a];
}

console.log(swapNum(4, 9));
