function BobandBoxes(num) {
  if (num === 0) return 1;
  if (num < 0) return 0;

  let step1 = BobandBoxes(num - 4);
  let step2 = BobandBoxes(num - 8);

  return step1 + step2;
}

let output = BobandBoxes(9);
console.log(output);
