// Maximum Product Subarray

const MaxSubarrayProduct = (arr, n) => {
  let res = arr[0];
  let max = res;
  let min = res;

  for (i = 1; i < n; i++) {
    if (arr[i] < 0) {
      let temp = max;
      max = min;
      min = temp;
    }

    max = Math.max(arr[i], max * arr[i]);
    min = Math.min(arr[i], min * arr[i]);

    res = Math.max(max, res);
  }
  console.log(res);
};

MaxSubarrayProduct([1, -2, -3, 0, 7, -8, -2], 7);
