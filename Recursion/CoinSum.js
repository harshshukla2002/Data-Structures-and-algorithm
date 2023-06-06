function CoinSum(n, arr, index) {
  if (n == 0) return 1;
  if (n < 0) return 0;
  if (n > 0 && index == arr.length) return 0;

  return CoinSum(n - arr[index], arr, index) + CoinSum(n, arr, index + 1);
}

let n = 3;
let arr = [3, 5, 2];
console.log(CoinSum(n, arr, 0));
