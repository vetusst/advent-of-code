// Day 2 

// Solution 2

const fs = require("fs");
const path = require('path');
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: 'utf-8'})

const play = (round) => {
    const [opp, me] = round

    const oppOptions = ['A', 'B', 'C']
    const oppIndex = oppOptions.indexOf(opp)

    const draw = me === 'Y' ? oppIndex : null
    const win = me === 'Z' ? oppIndex < 2 ? oppIndex + 1 : 0 : null
    const lose = me === 'X' ? oppIndex > 0 ? oppIndex - 1 : 2 : null
    
    const bonus = win !== null ? 6 : draw !== null ? 3 : 0
    return oppOptions.indexOf(oppOptions[draw] || oppOptions[win] || oppOptions[lose]) + 1 + bonus
}

const solution = (input) => {
    const inputArr = input.split('\r\n').map((line) => line.split(' '))
    return inputArr.map(x => play(x)).reduce((a,b) => a + b, 0);
};

console.log(solution(input))
