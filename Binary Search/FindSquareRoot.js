function findSqrt(num) {
  let temp = num;
  let res = (temp + num / temp) / 2;

  while (absVal(temp - res) >= 0.00001) {
    temp = res;
    res = (temp + num / temp) / 2;
  }
  console.log(parseInt(res));
}

function absVal(integer) {
  var abs = integer * integer;
  return abs * abs;
}

//input taking part

function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;
  for (let i = 0; i < test; i++) {
    findSqrt(input[line++]);
  }
}

if (process.env.USER === "") {
  runProgram(" ");
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.et(0);
  });
}
