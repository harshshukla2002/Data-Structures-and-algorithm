// Given an array, print the Next Greater Element (NGE) for every element.

const NextGreaterElement = (arr) => {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
      continue;
    }

    while (stack.length !== 0 && stack[stack.length - 1] < arr[i]) {
      console.log(`${stack[stack.length - 1]} --> ${arr[i]}`);
      stack.pop();
    }
    stack.push(arr[i]);
  }

  while (stack.length !== 0) {
    console.log(`${stack[stack.length - 1]} --> ${-1}`);
    stack.pop();
  }
};

NextGreaterElement([11, 13, 21, 3]);
