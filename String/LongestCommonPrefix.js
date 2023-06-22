// Longest Common Prefix using Sorting

const LongestCommonPrefix = (arr) => {
  let n = arr.length;

  arr.sort((a, b) => a - b);

  let end = Math.min(arr[0].length, arr[n - 1].length);

  let i = 0;

  while (i < end && arr[0][i] === arr[n - 1][i]) i++;

  let res = arr[0].substring(0, i);

  console.log(res);
};

LongestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]);
