// Count All Palindrome Sub-Strings in a String

var dp = Array(1001)
  .fill()
  .map(() => Array(1001).fill(-1));

const PalindromeSubstring = (str, i, j) => {
  if (i > j) return 1;
  if (dp[i][j] !== -1) return dp[i][j];
  if (str.charAt(i) !== str.charAt(j)) return 0;

  return (dp[i][j] = PalindromeSubstring(str, i + 1, j - 1));
};

const Count = (str) => {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (PalindromeSubstring(str, i, j) !== 0) count++;
    }
  }
  console.log(count);
};

Count("abbaeae");
