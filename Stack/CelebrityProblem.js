// celebrity problem

const CelebrityProblem = (mat, n) => {
  let l = 0;
  let r = n - 1;
  while (l < r) {
    if (mat[r][l] === 1) r--;
    else l++;
  }

  let temp = l;

  for (let i = 0; i < n; i++) {
    if (i !== temp) {
      if (mat[i][temp] === 0 || mat[temp][i] === 1) {
        console.log(-1);
        return;
      }
    }
  }
  console.log(temp);
};

let mat = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];

CelebrityProblem(mat, 4);
