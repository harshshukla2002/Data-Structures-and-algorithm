// Check if given Parentheses expression is balanced or not

const BalancedParanthesis = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else if (str[i] === ")") {
      if (stack.length === 0) return false;
      else {
        if (stack[stack.length - 1] === "(") stack.pop();
        else return false;
      }
    }
  }
  if (stack.length === 0) return true;
  else false;
};

console.log(BalancedParanthesis("((())))") ? "Balanced" : "Not Balanced");
