function MasaiPackersandMovers(k, n, arr) {
  if (k == 0) {
    return 1;
  } else if (k < 0) {
    return 0;
  } else {
    var t = 0;
    for (var i = 0; i < n; i++) {
      t += MasaiPackersandMovers(k - arr[i], n, arr);
    }
    return t;
  }
}

let output = MasaiPackersandMovers(3, 3, [1, 2, 3]);
console.log(output);
