const StockBroker = (n, arr) => {
  var diff = arr[1] - arr[0];
  var min = arr[0];
  for (var i = 1; i < n; i++) {
    if (arr[i] - min > diff) {
      diff = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  if (diff == -1) {
    diff = 0;
  }
  return diff;
};
