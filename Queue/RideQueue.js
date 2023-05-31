function RideQueue(N, Arr) {
  let count = 1;
  let temp = false;
  for (let i = 0; i < N - 1; i++) {
    if (Arr[i] < Arr[i + 1]) {
      temp = false;
    } else {
      temp = true;
    }
    if (temp) {
      count++;
    }
  }
  console.log(count);
}
