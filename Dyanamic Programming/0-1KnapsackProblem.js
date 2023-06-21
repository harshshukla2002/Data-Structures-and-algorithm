const KnapsackProblem = (weight, value, index, carryWeight, dp) => {
  if (index === weight.length || carryWeight <= 0) return 0;
  if (dp[index][carryWeight] !== -1) return dp[index][carryWeight];
  if (weight[i] > carryWeight)
    return (dp[index][carryWeight] = KnapsackProblem(
      weight,
      value,
      index + 1,
      carryWeight,
      dp
    ));

  const leave = KnapsackProblem(weight, value, index + 1, carryWeight, dp);
  const pick =
    value[index] +
    KnapsackProblem(weight, value, index, carryWeight - weight[index], dp);

  return (dp[index][carryWeight] = Math.max(pick, leave));
};
