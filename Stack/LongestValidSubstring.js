// Length of the longest valid substring

const LongestValidSubstring = (str) => {
  let stack = [];
  stack.push(-1);

  let res = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(i);
    else {
      if (stack.length !== 0) stack.pop();
      if (stack.length !== 0) res = Math.max(res, i - stack[stack.length - 1]);
      else stack.push(i);
    }
  }
  console.log(res);
};

LongestValidSubstring("()(()))))");
