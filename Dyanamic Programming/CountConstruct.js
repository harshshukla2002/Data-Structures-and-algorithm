// Question -> given an array of string and target string return number of ways you can make strng from given array

// approach -> Dynamic Programming with memoization

const CountConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let count = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numberofWays = CountConstruct(suffix, wordBank, memo);
      count += numberofWays;
    }
  }
  memo[target] = count;
  return count;
};

// time complexity => O(n*m^2)
// space complexity => O(m^2)
