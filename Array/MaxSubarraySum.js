//Largest Sum Contiguous Subarray

// solve using Kadane’s Algorithm

const MaxSubArraySum = (n, arr) => {
  if (n === 1) return arr[0];

  let m = Math.floor(n / 2);

  let leftMax = MaxSubArraySum(m, arr.slice(0, m));
  let rightMax = MaxSubArraySum(n - m, arr.slice(m));

  let leftSum = -Infinity;
  let rightSum = -Infinity;
  let sum = 0;

  for (let i = m; i < n; i++) {
    sum += arr[i];
    rightSum = Math.max(rightSum, sum);
  }

  sum = 0;

  for (let i = m - 1; i >= 0; i--) {
    sum += arr[i];
    leftSum = Math.max(leftSum, sum);
  }

  const res = leftSum + rightSum;

  return Math.max(res, leftMax, rightMax);
};

console.log(MaxSubArraySum(8, [-2, -3, 4, -1, -2, 1, 5, -3]));
