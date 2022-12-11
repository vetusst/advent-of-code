// Day 3 

// Solution 1

const fs = require("fs");
const path = require('path');
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: 'utf-8'})

const divideString = (str) => [str.slice(0, Math.floor(str.length / 2)), str.slice(Math.floor(str.length / 2))];

const findLetter = (line1, line2) => {
    for (let i = 0; i < line1.length; i++) {
        let letterInd = line2.indexOf(line1[i])
        if (letterInd >= 0) return line1[i]
    }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const solution1 = (input) => {
    const inputArr = input.split('\n').map((line) => divideString(line));
    return inputArr.map((line) => alphabet.indexOf(findLetter(line[0], line[1])) + 1).reduce((a,b) => a + b);    
};

console.log(solution1(input));