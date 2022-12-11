// Day 3 

// Solution 2

const fs = require("fs");
const path = require('path');
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: 'utf-8'})

const getInputArr = (input) =>
input.split("\n").reduce((acc, cur, i) => {
    if (i % 3 === 0) acc.push([cur]);
    else acc[acc.length - 1].push(cur);
    return acc;
}, []);

const findLetter = ([line1, line2, line3]) => {
    for (let i = 0; i < line1.length; i++) {
        let letterInd = line2.indexOf(line1[i])
        if (letterInd >= 0) {
            let letterInd2 = line3.indexOf(line1[i])
            if (letterInd2 >= 0) return line1[i]
        }
    }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const solution2 = (input) => {
    const inputArr = getInputArr(input);
    return inputArr.map((arr) => alphabet.indexOf(findLetter(arr)) + 1).reduce((a,b) => a + b);    
};

console.log(solution2(input));