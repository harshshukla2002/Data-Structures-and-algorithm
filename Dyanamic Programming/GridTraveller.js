// Question -> you have a grid of m*n matrix in how many ways you can travel to bottom rigth corner from top left corner
// Answer -> We can acheive this using dynamic programming memoization

const GridTravaler = (m, n, memo = {}) => {
  let key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = GridTravaler(m - 1, n, memo) + GridTravaler(m, n - 1, memo);
  return memo[key];
};

console.log(GridTravaler(2, 3));
console.log(GridTravaler(8, 9));
console.log(GridTravaler(18, 18));

// time complexity -> O(m*n)
// space complexity -> O(m+n)
