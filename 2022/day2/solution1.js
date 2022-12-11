// Day 2 

// Solution 1

const fs = require("fs");
const path = require('path');
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: 'utf-8'})

const play = (round) => {
    const [opp, me] = round

    const oppOptions = ['A', 'B', 'C']
    const meOptions = ['X', 'Y', 'Z']

    const oppIndex = oppOptions.indexOf(opp)
    const meIndex = meOptions.indexOf(me)

    const draw = oppIndex === meIndex

    const winIndex = Math.abs(oppIndex - meIndex) > 1 
        ? Math.min(oppIndex, meIndex) 
        : Math.max(oppIndex, meIndex)
        
    const win = winIndex === meIndex && !draw
    const bonus = win ? 6 : draw ? 3 : 0
    return meIndex + 1 + bonus
}
// A - 1 - rock
// B - 2 - paper
// C - 3 - scissors

// X - 1 - rock
// Y - 2 - paper
// Z - 3 - scissors

const solution = (input) => {
    const inputArr = input.split('\r\n').map((line) => line.split(' '))
    return inputArr.map(x => play(x)).reduce((a,b) => a + b, 0)
}

console.log(solution(input))
