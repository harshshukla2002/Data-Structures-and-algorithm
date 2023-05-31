function BinarySearch(n, arr, key) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === key) {
      console.log(mid);
      return;
    } else if (arr[mid] < key) low = mid + 1;
    else high = mid - 1;
  }
  console.log(-1);
}

//input taking part

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let array = input[1].trim().split(" ").map(Number);
  let key = +input[2];
  BinarySearch(n, array, key);
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
