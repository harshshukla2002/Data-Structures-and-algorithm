// Given a stack with push(), pop(), and empty() operations, The task is to delete the middle element of it without using any additional data structure.

const DeleteMiddleElement = (stack) => {
  let NewStack = [];
  let mid = Math.floor(stack.length / 2);

  for (let i = 0; i < stack.length; i++) {
    if (i !== mid) {
      NewStack.push(stack[i]);
    }
  }
  console.log(NewStack.join(" "));
};

DeleteMiddleElement([1, 2, 3, 4, 5]);
