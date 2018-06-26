// How do get nth Fibonacci number?
function fibonacci(n) {
  const fibo = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}

console.log(fibonacci(12));

// using recursion
function getFiboNum(n) {
  if (n <= 1) {
    return n;
  }
  return getFiboNum(n - 1) + getFiboNum(n - 2);
}

console.log(getFiboNum(12));
