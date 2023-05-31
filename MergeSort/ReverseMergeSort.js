function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  mergesort(arr, 0, n - 1);
  let res = "";
  for (let i = 0; i < n; i++) {
    res += arr[i] + " ";
  }
  console.log(res);
}

function mergesort(arr, left, right) {
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);
  mergesort(arr, left, mid);
  mergesort(arr, mid + 1, right);
  merge(arr, left, right, mid);
  return;
}

function merge(arr, left, right, mid) {
  let arr1 = [];
  let arr2 = [];
  for (let i = left; i <= mid; i++) {
    arr1.push(arr[i]);
  }
  for (let j = mid + 1; j <= right; j++) {
    arr2.push(arr[j]);
  }
  let index = left;
  let l = 0;
  let r = 0;
  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] >= arr2[r]) arr[index++] = arr1[l++];
    else arr[index++] = arr2[r++];
  }
  while (l < arr1.length) arr[index++] = arr1[l++];

  while (r < arr2.length) arr[index++] = arr2[r++];

  return;
}

if (process.env.USER === "") {
  runProgram(``);
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
    process.exit(0);
  });
}
