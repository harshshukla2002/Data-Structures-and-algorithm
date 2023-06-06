(p = 1), (f = 1);
function EtoPower(x, n) {
  let r;

  if (n == 0) return 1;

  r = EtoPower(x, n - 1);

  p = p * x;

  f = f * n;

  return r + p / f;
}

//Main Code
let [x, n] = [4, 2];

let res = EtoPower(x, n);
console.log(res.toFixed(4));
