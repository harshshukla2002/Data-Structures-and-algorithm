// Search an element in a sorted and rotated Array

const SearchInRotatedSortedArray = (arr, l, h, key) => {
  if (l > h) return -1;

  let mid = l + Math.floor((h - l) / 2);

  if (arr[mid] === key) return mid;

  if (arr[l] <= arr[mid]) {
    if (key >= arr[l] && key <= arr[mid])
      return SearchInRotatedSortedArray(arr, l, mid - 1, key);

    return SearchInRotatedSortedArray(arr, mid + 1, h, key);
  }

  if (key >= arr[mid] && key <= arr[h])
    return SearchInRotatedSortedArray(arr, mid + 1, h, key);

  return SearchInRotatedSortedArray(arr, l, mid - 1, key);
};

console.log(SearchInRotatedSortedArray([5, 6, 7, 8, 9, 10, 1, 2, 3], 0, 8, 3));
