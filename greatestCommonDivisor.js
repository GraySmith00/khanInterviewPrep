// How would you find the greatest common divisor of two numbers?

function greatestCommonDivisor(a, b) {
  let divisor = 2;
  let greatestDivisor = 1;

  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(greatestCommonDivisor(14, 21));
console.log(greatestCommonDivisor(69, 169));

// using recursion
function greatestCommonDiv(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDiv(b, a % b);
}

console.log(greatestCommonDiv(14, 21));
console.log(greatestCommonDiv(69, 169));
