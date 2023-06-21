const PairSumInRotatedSortedArray = (arr, n, k) => {
  let pivot = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      pivot = i + 1;
      break;
    }
  }

  let left = pivot;
  let right = pivot - 1;

  while (left !== right) {
    if (arr[left] + arr[right] === k) return true;
    else if (arr[left] + arr[right] < k) left = (left + 1) % n;
    else right = (right - 1 + n) % n;
  }

  return false;
};

console.log(PairSumInRotatedSortedArray([11, 15, 6, 8, 9, 10], 6, 16));
