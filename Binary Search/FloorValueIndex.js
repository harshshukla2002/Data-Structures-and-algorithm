// Floor -> Means the key and then value which is closest less number of key.
// Example if key is 9 and array is [1,2,3,5,7,8] so here floor is 8.
// or if key is 5 and array is [1,2,3,4,5] so here floor is 5.
// we have to return index.

function FindFloorValue(n, key, arr) {
  let low = 0;
  let high = n - 1;
  let ans = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === key) {
      console.log(mid);
      return;
    } else if (arr[mid] < key) {
      ans = mid;
      low = mid + 1;
    } else high = mid - 1;
  }

  console.log(ans);
}

//input taking part

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  FindFloorValue(n, k, array);
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
