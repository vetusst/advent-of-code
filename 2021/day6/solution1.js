// Day 6

// Solution 1

const fs = require("fs");
let input = fs.readFileSync('./day6/input.txt', {
    encoding: 'utf-8'
})

input = input.split(',').map(x => Number(x))


const solution1 = (input) => {
    let dayCounter = 1
    let length = input.length
    while (dayCounter <= 80) {
        for (let i = 0; i < length; i++) {
            if (input[i] === 0) {input[i] = 7; input.push(8)}
            input[i]--
        }
        length = input.length
        dayCounter++
    }
    
    return input.length
}

console.log(solution1(input))