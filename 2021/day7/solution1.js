// Day 7

// Solution 1

const fs = require("fs");
let input = fs.readFileSync('./day7/input.txt', {
    encoding: 'utf-8'
})

input = input.split(',').map(x => Number(x))

const solution1 = (input) => {
    let costs = []
    for (let i = Math.min(...input); i < Math.max(...input); i++) {
        costs.push(input.reduce((a,b)=> a + Math.abs(b - i), 0))
    }
    return Math.min(...costs)
}

console.log(solution1(input))

