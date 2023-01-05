// Day 10

// Solution 1

const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
  encoding: "utf-8",
});

input = input.split("\n").map((x) => x.split(" "));

const solution = () => {
  const cycles = [20, 60, 100, 140, 180, 220]
  let cycle = 0
  let X = 1
  let res = 0

  input.forEach((x) => {
    if (x[1]) {
      cycle += 2
      X = X + +x[1]
    } else {
      cycle += 1
    }
    
    const diff = cycles[0] - cycle
    if (diff === 1 || diff === 0) {
      res += cycles.shift() * X
    }
  })
  return res;
}

console.log(solution())