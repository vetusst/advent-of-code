// Day 9

// Solution 1

const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
  encoding: "utf-8",
});

input = input.split("\n").map((x) => x.split(" "));

const direcitonTypes = {
  UP: "U",
  RIGHT: "R",
  DOWN: "D",
  LEFT: "L",
};

const getNewHead = ([x, y], direction) => {
  const { UP, RIGHT, DOWN, LEFT } = direcitonTypes;
  switch (direction) {
    case UP:
      return [x, y + 1];
    case RIGHT:
      return [x + 1, y];
    case DOWN:
      return [x, y - 1];
    case LEFT:
      return [x - 1, y];
  }
}

const getNewTail = ([xHead, yHead], [xTail, yTail]) => {
  const yDist = Math.abs(yHead - yTail);
  const xDist = Math.abs(xHead - xTail);

  if (xHead === xTail && yDist > 1) {
    return [xTail, Math.max(yHead, yTail) - 1]
  }
  if (yHead === yTail && xDist > 1) {
    return [Math.max(xHead, xTail) - 1, yTail]
  }
  if (
    (xDist === 2 && yDist === 1 || xDist === 1 && yDist === 2)
  ) {
    return xDist === 2 ? [Math.max(xHead, xTail) - 1, yHead] : [xHead, Math.max(yHead, yTail) - 1]
  }
  return [xTail, yTail];
}

const solution = (input) => {
  const positionsHead = [[0, 0]]; 
  const positionsTail = [[0, 0]]; 

  input.forEach(instruction => {
    const [direction, steps] = instruction;
    
    for (let i = 0; i < +steps; i++) {
      const currentHead = positionsHead[positionsHead.length - 1];
      const currentTail = positionsTail[positionsTail.length - 1];

      const newHead = getNewHead(currentHead, direction); 
      positionsHead.push(newHead);
      positionsTail.push(getNewTail(newHead, currentTail));
    }
  })

  const uniqueTailPositions = positionsTail.filter(( t={}, a=> !(t[a]=a in t) ));
  return uniqueTailPositions.length;
};

console.log(solution(input));
