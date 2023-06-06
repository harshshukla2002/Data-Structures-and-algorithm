// Question => Given an array and targetsum return an array containing the shortest combination of numbers that adds upto exactly the target sum

//approach => Dynamic Programming using memoization

const BestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderCombination = BestSum(reminder, numbers, memo);
    if (reminderCombination !== null) {
      const combination = [...reminderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

// time complexity => O(n*m^2)
// space complexity => O(m^2)
