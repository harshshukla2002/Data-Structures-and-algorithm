function ReturnSum(n) {
  if (n == 0) return 0;

  sum = n + ReturnSum(n - 1);

  return sum;
}

let result = ReturnSum(9);

console.log("Result : ", result);
