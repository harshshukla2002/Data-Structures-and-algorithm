// Chocolate Distribution problem

const ChocolateDistribution = (chocolates, m) => {
  chocolates.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  let n = chocolates.length;

  for (let i = 0; i + m - 1 < n; i++) {
    let diff = chocolates[i + m - 1] - chocolates[i];
    if (diff < min) min = diff;
  }
  console.log(min);
};
ChocolateDistribution(
  [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50],
  7
);


