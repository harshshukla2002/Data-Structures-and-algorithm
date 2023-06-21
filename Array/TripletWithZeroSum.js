// Find all triplets with zero sum

const TripletWithZeroSum = (arr, n) => {
  arr.sort((a, b) => a - b);
  let found = false;

  for (let i = 0; i < n - 1; i++) {
    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      if (arr[i] + arr[l] + arr[r] === 0) {
        console.log(arr[i], arr[l], arr[r]);
        found = true;
        l++;
        r--;
      } else if (arr[i] + arr[l] + arr[r] < 0) l++;
      else r--;
    }
  }

  if (!found) console.log(-1);
};

TripletWithZeroSum([0, -1, 2, -3, 1], [0, -1, 2, -3, 1].length);
