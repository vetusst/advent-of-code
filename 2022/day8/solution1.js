// Day 8

// Solution 1

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

const getTreesVisability = (input) => {
    let leftPivot = -1;
    const left = input.map(el => {
        if (el > leftPivot) {
            leftPivot = el;
            return true;
        } else {
            return false
        }
    });
    let rightPivot = -1;
    const right = input.reverse().map(el => {
        if (el > rightPivot) {
            rightPivot = el;
            return true;
        } else {
            return false
        }
    }).reverse();
    return left.map((el, i) => el || right[i]);
};

const multiplyMatrixes = (matrix1, matrix2) => {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        const row = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] || matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
};

const solution = (input) => {
    const matrix = input.split('\r\n').map(row => row.split(''));
    const verticalMatrix = revertMatrix(matrix);

    const horizontalVisibility = matrix.map(row => getTreesVisability(row))
    const verticalVisibility = verticalMatrix.map(column => getTreesVisability(column))

    const visibilityMatrix = multiplyMatrixes(horizontalVisibility, revertMatrix(verticalVisibility));

    return visibilityMatrix.reduce((acc, el) => acc.concat(el), []).reduce((acc, bool) => bool ? acc + 1 : acc, 0)
};


console.log(solution(input));
