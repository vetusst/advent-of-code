// Day 6 

// Solution 1

const fs = require("fs");
const path = require('path');
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: 'utf-8'})

const solution = (input) => {
    const markerSize = 4;
    return input.slice(0, input.findIndex((_, i, arr) => {
        const marker = arr.slice(i, i + markerSize);
        return new Set(marker).size === marker.length
    }) + markerSize).length
}

console.log(solution(input.split('')))