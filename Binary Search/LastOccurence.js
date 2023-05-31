function LastOccurence(n, key, arr) {
  let low = 0;
  let high = n - 1;
  let ans = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === key) {
      ans = mid;
      low = mid + 1;
    } else if (arr[mid] < key) low = mid + 1;
    else high = mid - 1;
  }

  console.log(ans);
}

//input taking part

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let array = input[1].trim().split(" ").map(Number);
  FirstOccurence(n, k, array);
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
