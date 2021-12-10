// Day 7

// Solution 2

const fs = require("fs");
let input = fs.readFileSync('./day7/input.txt', {
    encoding: 'utf-8'
})

input = input.split(',').map(x => Number(x))

const solution2 = (input) => {
    let costs = []
    for (let i = Math.min(...input); i < Math.max(...input); i++) {
        costs.push(input.reduce((a,b, ind)=> a + (Math.abs(b - i)*(1 + Math.abs(b - i))/2), 0)) // using some arithmetic progression right here :)
    }
    return Math.min(...costs)
}

console.log(solution2(input))

