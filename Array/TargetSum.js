// Question -> Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x.

// solution -> using nested loop.

const Checkpair = (n, arr, x) => {
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === x) {
        console.log("YES");
        return;
      }
    }
  }
  console.log("NO");
};

Checkpair(5, [1, -2, 1, 0, 5], 0); // YES
