// Day 9

// Solution 2

const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
  encoding: "utf-8",
});

input = input.split("\r\n").map((x) => x.split(" "));

// helper function to display coordinates
function displayCoordinates(coordinates) {
  const grid = [];
  for (let i = -15; i < 15; i++) {
    grid[i] = [];
    for (let j = -15; j < 15; j++) {
      grid[i][j] = '.';
    }
  }
  
  Object.values(coordinates).forEach((item, i) => {
    const [x, y] = item.slice(-1)[0];
    grid[y][x] = i;
  });
  
  grid.reverse().forEach(row => console.log(row.join('')))
}

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
  if (xDist === 2 && yDist === 1 || xDist === 1 && yDist === 2) {
    return xDist === 2 ? [Math.max(xHead, xTail) - 1, yHead] : [xHead, Math.max(yHead, yTail) - 1]
  }
  if (xDist === 2 && yDist === 2) {
    return [Math.max(xHead, xTail) - 1, Math.max(yHead, yTail) - 1]
  }
  return [xTail, yTail];
}
  
const solution = (input) => {
  const positions = {};
  [...Array(10).keys()].forEach(x => positions[x] = [[0, 0]])
  
  input.forEach(instruction => {
    const [direction, steps] = instruction;
    
    for (let i = 0; i < +steps; i++) {
      for (let x = 0; x < Object.keys(positions).length - 1; x++) {
        const currHead = positions[x].slice(-1)[0];
        const currTail = positions[+x + 1].slice(-1)[0];
        
        const newHead = x === 0 ? getNewHead(currHead, direction) : currHead;
        positions[x].push(newHead);
        
        const newTail = getNewTail(newHead, currTail);
        positions[+x + 1].push(newTail);
      };
      // displayCoordinates(positions) // uncomment to see visualization
    }
  })
  
  return positions[9].filter(( t={}, a=> !(t[a]=a in t) )).length; // remove duplicates and count
};
  
console.log(solution(input));