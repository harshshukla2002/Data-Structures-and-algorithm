function runProgram(input) {
  var input = input.split("\n");
  var n = +input[0];
  var a = input[1].trim().split(" ");
  var arrival = [];
  for (var i = 0; i < a.length; i++) {
    var part = a[i].split(":").map(Number);
    var p = part[0] * 60 + part[1];
    arrival.push(p);
  }
  var d = input[2].trim().split(" ");
  var departure = [];
  for (var i = 0; i < d.length; i++) {
    var p1 = d[i].split(":").map(Number);
    var p2 = p1[0] * 60 + p1[1];
    departure.push(p2);
  }

  //console.log(arrival+"\n"+departure)
  solve(n, arrival, departure);
}

function solve(n, arrival, departure) {
  departure.sort(function (a, b) {
    return a - b;
  });
  var plat = 1;
  var max = 1;
  var i = 1;
  var j = 0;
  while (i < n) {
    if (arrival[i] >= departure[j]) {
      plat--;

      j++;
    } else {
      plat++;
      i++;
    }
    max = Math.max(max, plat);
  }

  console.log(max);
}
