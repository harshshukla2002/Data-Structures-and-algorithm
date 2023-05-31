function DiscoverNumber(arr, k, low, high, mid) {
  if (high >= low) {
    mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] == k) {
      return true;
    } else if (arr[mid] > k) {
      return DiscoverNumber(arr, k, low, mid - 1, mid);
    } else {
      return DiscoverNumber(arr, k, mid + 1, high, mid);
    }
  }
  return false;
}

//input taking part

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, q] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  array = array.sort((a, b) => a - b);
  let line = 2;

  for (let i = 0; i < q; i++) {
    let k = input[line++];
    let mid;
    let search = DiscoverNumber(array, k, 0, n - 1, mid);
    if (search) {
      console.log("YES");
    } else {
      console.log("NO");
    }
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
