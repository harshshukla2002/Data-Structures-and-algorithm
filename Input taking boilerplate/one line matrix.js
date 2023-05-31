//function where the solution of given question

//input taking part

function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        let size = +input[line++];
        let array = input[line++].trim().split(" ").map(Number);
        let mainarray = []
        let start = 0;
        let end = size;
        for (let i = 0; i < size; i++) {
            let temp = []
            while (start < end) {
                temp.push(array[start++]);
            }
            mainarray.push(temp)
            start = end;
            end = end + size
        }
        console.log(size, mainarray)
    }
}

if (process.env.USER === "") {
    runProgram(' ');
}
else {
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
    })
}