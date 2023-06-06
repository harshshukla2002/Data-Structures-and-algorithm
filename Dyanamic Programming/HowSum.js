//question -> given an array and targetsum find if there is any subarray whose sum is equal to targetsum of not and return

//approach -> dynamic programming using memoization

const HowSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const reminders = targetSum - num;
    const reminderResult = HowSum(reminders, numbers, memo);
    if (reminderResult !== null) {
      memo[targetSum] = [...reminderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

// time complexity =>  O(n*m^2)
// space complexity => O(m^2)
