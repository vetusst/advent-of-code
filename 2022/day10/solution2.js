// Day 10

// Solution 2

const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
  encoding: "utf-8",
});

input = input.split("\n").map((x) => x.split(" "));

const getPixel = (X, cycle) => {
  const sprite = [X - 1, X, X + 1];
  const CTR = cycle - 40 * Math.floor(cycle / 40);
  return sprite.includes(CTR) ? "#" : ".";
};

const solution = () => {
  const acc = { res: "", cycle: 0, X: 1 };

  const result = input.reduce((acc, x) => {
    const { cycle, X, res } = acc;
    let newCycle = cycle + 1;
    let newX = X;

    if (x[1]) {
      newCycle += 1;
      newX += +x[1];
    }

    const prevPixel = x[1] ? getPixel(X, cycle) : "";
    const pixel = getPixel(newX, newCycle - 1);

    return {
      res: res + prevPixel + pixel,
      cycle: newCycle,
      X: newX,
    };
  }, acc);
  return result.res.match(/.{40}/g);
};

console.log(solution());
