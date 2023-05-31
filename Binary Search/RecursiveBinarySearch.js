function RecursiveBinarySearch(n, k, arr, index) {
  if (index === n) {
    console.log(-1);
    return;
  }

  if (arr[index] === k) {
    console.log(1);
    return;
  }

  RecursiveBinarySearch(n, k, arr, index + 1);
}

//input taking part

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  RecursiveBinarySearch(n, k, array, 0);
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
