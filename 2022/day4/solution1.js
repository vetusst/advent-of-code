// Day 4 

// Solution 1

const fs = require("fs");
const path = require('path');
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: 'utf-8'})

const inputArr = input.split('\n').map(x => x.split(',').map(x => x.split('-')));

const solution = () => {
    return inputArr.filter(pair => {
        const [range1, range2] = pair
        const [min1, max1, min2, max2] = [...range1, ...range2].map(x => parseInt(x));
        return (min1 <= min2 && max1 >= max2) || (min2 <= min1 && max2 >= max1)
    }).length;
};

console.log(solution());