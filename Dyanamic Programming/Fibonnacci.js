// This is solution of fibonacci question in O(n) time and space complexity

const Fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = Fibonacci(n - 1, memo) + Fibonacci(n - 2, memo);
  return memo[n];
};

console.log(Fibonacci(6));
console.log(Fibonacci(8));
console.log(Fibonacci(25));
console.log(Fibonacci(50));
