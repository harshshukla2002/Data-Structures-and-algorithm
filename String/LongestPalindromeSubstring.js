// Given a string str, the task is to find the longest substring which is a palindrome.

const LongestPalindromeSubstring = (str) => {
  let n = str.length;
  let dp = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  let max = 1;

  for (let i = 0; i < n - 1; i++) {
    if (str[i] === str[i + 1]) {
      dp[i][i + 1] = true;
      max = 2;
    }
  }

  for (let k = 3; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      let j = i + k - 1;

      if (dp[i + 1][j - 1] && str[i] === str[j]) {
        dp[i][j] = true;
        if (k > max) {
          max = k;
        }
      }
    }
  }
  console.log(max);
};

LongestPalindromeSubstring("forgeeksskeegfor");
