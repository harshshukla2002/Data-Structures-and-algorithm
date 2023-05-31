function MinimumSandR(n, arr) {
  let low = 0;
  let high = n - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > arr[high]) low = mid + 1;
    else if (arr[mid] < arr[high]) high = mid;
    else high--;
  }
  console.log(arr[low] === undefined ? -1 : arr[low]);
}

//input taking part

function runProgram(input) {
  input = input.trim().split("\n");
  let size = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  array = array.sort((a, b) => a - b);
  MinimumSandR(size, array);
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
