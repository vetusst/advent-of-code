// Day 6

// Solution 2

const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let input = fs.readFileSync('./day6/input.txt', {
    encoding: 'utf-8'
})

input = input.split(',').map(x => Number(x)).reduce((day, fish) => {day[fish]++; return day}, new Array(9).fill(0))

const solution2 = (input) => {
    for (let i = 0; i < 256; i++) {
        input.push(input.shift())
        input[6] += input[input.length - 1]
    }
    return input.reduce((a,b) => a + b)
}

console.log(solution2(input))