// Given a boolean matrix mat[M][N] of size M X N, modify it such that if a matrix cell mat[i][j] is 1 (or true) then make all the cells of ith row and jth column as 1.

const SetMatrixZeros = (mat, n, m) => {
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 1) {
        row[i] = 1;
        col[i] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] === 1 || col[j] === 1) mat[i][j] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(mat[i].join(" "));
  }
};

SetMatrixZeros(
  [
    [1, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ],
  3,
  4
);
