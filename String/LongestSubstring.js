// Length of the longest substring without repeating characters

const LongestSubstring = (str) => {
  let max = 0;
  let visited = new Array(256).fill(false);

  let left = 0;
  let right = 0;

  for (; right < str.length; right++) {
    if (visited[str.charCodeAt(right)] === false)
      visited[str.charCodeAt(right)] = true;
    else {
      max = Math.max(max, right - left);

      while (left < right) {
        if (str.charCodeAt(left) !== str.charCodeAt(right))
          visited[str.charCodeAt(left)] = false;
        else {
          left++;
          break;
        }
        left++;
      }
    }
  }
  max = Math.max(max, right - left);

  console.log(max);
};

LongestSubstring("GeeksForGeeks");
