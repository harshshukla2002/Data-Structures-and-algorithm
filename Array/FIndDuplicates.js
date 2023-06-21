// Question -> Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times.

// Solution -> using hashmap

const FindDuplicates1 = (arr, n) => {
  let obj = {};
  for (let value of arr)
    obj[value] === undefined ? (obj[value] = 1) : obj[value]++;

  for (let key in obj) {
    if (obj[key] > 1) console.log(key);
  }
};

FindDuplicates1([1, 2, 3, 6, 3, 6, 1, 2], 8);

// if Find these repeating numbers using only constant memory space.

const FindDuplicates2 = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let temp = arr[i] % n;
    arr[temp] = arr[temp] + n;
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] > n * 2) console.log(i);
  }
};

FindDuplicates2([1, 2, 3, 6, 3, 6, 1, 2], 8);
