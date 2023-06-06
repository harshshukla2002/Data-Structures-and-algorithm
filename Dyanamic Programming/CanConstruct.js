// Question -> given an array of string and target string return true if you can make strng from given array else false

// approach -> Dynamic Programming with memoization

const CanConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (CanConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

// time complexity => O(n*m^2)
// space complexity => O(m^2)
