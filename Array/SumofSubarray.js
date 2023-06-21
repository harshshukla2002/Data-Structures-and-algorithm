function SumofSubarray(n, k, arr) {
  let j = 0;
  let sum = 0;
  let i = 0;
  
  while (i < n) {
    while (sum < k && j < n) {
      sum += arr[j++];
    }
    if (sum === k) {
      console.log("Yes");
      return;
    }
    sum -= arr[i++];
  }

  console.log("No");
}
