// Day 3

// Solution 1

const fs = require("fs");
let input = fs.readFileSync('./day3/input.txt', {encoding: 'utf-8'})

input = input.split('\n')

const solution1 = (input) => {
    let gamma = [];
    let bit;
    for (let i = 0; i < input[0].length-1; i++) {
        bit = input.reduce((a, b) => a + Number(b[i]), 0);
        gamma.push(bit > input.length/2 ? '1' : '0')
    }
    let epsilon = gamma.map(x => x === '1' ? '0' : '1')
    return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2)
}
console.log(solution1(input))
