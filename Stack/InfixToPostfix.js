const Operators = (value) => {
  if (value === "^") return 3;
  else if (value === "/" || value === "*") return 2;
  else if (value === "+" || value === "-") return 1;
  else return -1;
};

const InfixToPostfix = (str) => {
  let stack = [];
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];

    if (
      (temp >= "a" && temp <= "z") ||
      (temp >= "A" && temp <= "Z") ||
      (temp >= "0" && temp <= "9")
    )
      res += temp;
    else if (temp === "(") stack.push(temp);
    else if (temp === ")") {
      while (stack[stack.length - 1] !== "(") {
        res += stack[stack.length - 1];
        stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length !== 0 &&
        Operators(str[i]) <= Operators(stack[stack.length - 1])
      ) {
        res += stack[stack.length - 1];
        stack.pop();
      }
      stack.push(temp);
    }
  }
  while (stack.length !== 0) {
    res += stack[stack.length - 1];
    stack.pop();
  }
  console.log(res);
};

InfixToPostfix("a+b*(c^d-e)^(f+g*h)-i");
