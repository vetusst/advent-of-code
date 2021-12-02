// Day 2

// Solution 2

const fs = require("fs");
let input = fs.readFileSync('./day2/input.txt', {encoding: 'utf-8'})

input = input.split('\n')

const solution2 = (input) => {
    let depth = 0
    let positionX = 0
    let aim = 0
    for (let i = 0; i < input.length; i++) {
        let step = input[i].split(' ')[0]
        let units = Number(input[i].split(' ')[1])
        if (step === 'down') aim += units
        if (step === 'up') aim -= units
        if (step === 'forward') {positionX += units; depth += aim * units}
    }
    return depth * positionX
}

console.log('Solution 2:', solution2(input))