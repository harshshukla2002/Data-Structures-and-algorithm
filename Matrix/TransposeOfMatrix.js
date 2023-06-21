// Transpose of a matrix is obtained by changing rows to columns and columns to rows. In other words, transpose of A[N][M] is obtained by changing A[i][j] to A[j][i].

const TransposeOfMatrix = (mat, n, m) => {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < m; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) console.log(mat[i].join(" "));
};

var A = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

TransposeOfMatrix(A, A.length, A[0].length);
