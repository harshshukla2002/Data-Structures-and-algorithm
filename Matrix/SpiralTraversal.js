// Spiraly traverse the matrix

// solution using recursion

const SpiralTraversal = (arr, i, j, m, n) => {
  if (i >= m && j >= n) return;

  for (let p = j; p < n; p++) console.log(arr[i][p] + " ");
  for (let p = i + 1; p < m; p++) console.log(arr[p][n - 1] + " ");

  if (m - 1 !== i) {
    for (let p = n - 2; p >= j; p--) {
      console.log(arr[m - 1][p] + " ");
    }
  }

  if (n - 1 != j) {
    for (let p = m - 2; p > i; p--) {
      console.log(arr[p][j] + " ");
    }
  }
  SpiralTraversal(arr, i + 1, j + 1, m - 1, n - 1);
};

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let r = arr.length;
let c = arr[0].length;

SpiralTraversal(arr, 0, 0, r, c);
