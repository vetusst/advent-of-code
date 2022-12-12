// Day 8

// Solution 2

const fs = require("fs");
const path = require("path");
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
  encoding: "utf-8",
});

// 3 0 3 7 3 
// 2 5 5 1 2
// 6 5 3 3 2
// 3 3 5 4 9
// 3 5 3 9 0

const revertMatrix = (input) => {
    const outer = [];
    for (let i = 0; i < input.length; i++) {
        const inner = [];
        for (let j = 0; j < input[i].length; j++) {
            inner.push(input[j][i]);
        }
        outer.push(inner);
    }
    return outer;
};

const multiplyMatrixes = (matrix1, matrix2) => {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] * matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
};

const getVisibility = (input, pivot) => {
    return input.slice(0).reduce((acc, el, i, arr) => {
        if (el >= pivot) {
            arr.splice(1)
            return acc + 1;
        } else {
            return acc + 1;
        } 
    }, 0);
}

const getVisibilityScore = (input) => {
   return input.map(row => row.map((el, i, arr) => {
        if (i === 0) return 0;

        const left = arr.slice(0, i).reverse();
        const right = arr.slice(i + 1);

        return getVisibility(left, el) * getVisibility(right, el);
   })) 
}

const solution = (input) => {
    const matrix = input.split('\r\n').map(row => row.split(''));
    const verticalMatrix = revertMatrix(matrix);

    const horizontalVisibilityScore = getVisibilityScore(matrix); 
    const verticalVisibilityScore = getVisibilityScore(verticalMatrix);
    const visibilityMatrix = multiplyMatrixes(horizontalVisibilityScore, revertMatrix(verticalVisibilityScore));

    return Math.max(...visibilityMatrix.map(row => Math.max(...row)));
};


console.log(solution(input));
