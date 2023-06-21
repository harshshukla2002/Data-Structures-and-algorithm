// question -> Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible for buying and selling the stocks on different days using transactions where at most one transaction is allowed.

// solution -> using loop

const BuyAndSellStock = (n, price) => {
  let buy = price[0];
  let maxProfit = 0;

  for (let i = 0; i < n; i++) {
    if (buy > price[i]) buy = price[i];
    else if (price[i] - buy > maxProfit) maxProfit = price[i] - buy;
  }

  console.log(maxProfit);
};

BuyAndSellStock(5, [7, 1, 5, 6, 4]); //5
