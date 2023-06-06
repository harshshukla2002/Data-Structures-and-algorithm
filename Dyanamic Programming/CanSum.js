// given an array and target sum find if we can generate target sum from given array or not
// approach => dynamic programming

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(25, [2, 3, 4, 5]));
console.log(canSum(7, [2, 3, 4, 7]));
console.log(canSum(300, [7, 14]));

// time complexity => O(m*n)
// space complexity => O(m)
