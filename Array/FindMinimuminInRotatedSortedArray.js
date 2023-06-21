// Find the Minimum element in a Sorted and Rotated Array

// using linear search

const FindMinimuminRotatedSortedArray1 = (arr, n) => {
  let min = Number.MAX_VALUE;

  for (let value of arr) {
    if (value < min) min = value;
  }

  console.log(min);
};

FindMinimuminRotatedSortedArray1([5, 6, 1, 2, 3, 4], 6);

// using Binary Search

const FindMinimuminRotatedSortedArray2 = (arr, low, high) => {
  if (arr[low] <= arr[high]) return arr[low];

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] < arr[mid - 1]) return arr[mid];

    if (arr[mid] > arr[high]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};

console.log(FindMinimuminRotatedSortedArray2([5, 6, 1, 2, 3, 4], 0, 5));
