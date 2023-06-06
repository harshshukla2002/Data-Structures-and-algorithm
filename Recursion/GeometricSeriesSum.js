function sum(n, r) {
  // base case
  if (n == 0) return 1;

  // calculate the sum each time
  var ans = 1 / Math.pow(r, n) + sum(r,n - 1);

  // return final answer
  return ans;
}

// Driver code
// integer initialisation
var n = 1,
  r = 1;

console.log(sum(r,n).toFixed(5));
