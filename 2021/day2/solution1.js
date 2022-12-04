// Day 2

// Solution 1

const fs = require("fs");
let input = fs.readFileSync('./day2/input.txt', {encoding: 'utf-8'})

input = input.split('\n')

const solution1 = (input) => {
    let depth = 0
    let positionX = 0
    for (let i = 0; i < input.length; i++) {
        let step = input[i].split(' ')[0]
        let units = Number(input[i].split(' ')[1])
        if (step === 'forward') positionX += units
        if (step === 'up') depth -= units
        if (step === 'down') depth += units
    }
    return depth * positionX
}

console.log('Solution 1:', solution1(input))