// Day 4

// Solution 1

const fs = require("fs");
let input = fs.readFileSync('./day4/input.txt', {
    encoding: 'utf-8'
})

let order = '79,9,13,43,53,51,40,47,56,27,0,14,33,60,61,36,72,48,83,42,10,86,41,75,16,80,15,93,95,45,68,96,84,11,85,63,18,31,35,74,71,91,39,88,55,6,21,12,58,29,69,37,44,98,89,78,17,64,59,76,54,30,65,82,28,50,32,77,66,24,1,70,92,23,8,49,38,73,94,26,22,34,97,25,87,19,57,7,2,3,46,67,90,62,20,5,52,99,81,4'
order = order.split(',')

input = input.split('\n\r').map(y => y.split(/[^\d]+/).filter(x => x !== ''))

const solution1 = (input, order) => {
    for (let i = 0; i < order.length; i++) {
        for (let j = 0; j < input.length; j++) {
            let index = input[j].indexOf(order[i])
            if (index !== -1) input[j][index] = 'x'

            let board = input[j]

            for (let k = 0; k < 5; k++) {
                if (board.slice(k * 5, k * 5 + 5).every(x => x === 'x')) {
                    return board
                        .filter(x => x !== 'x')
                        .reduce((a, b) => Number(a) + Number(b)) * Number(order[i])
                }
                if ([board[k], board[k + 5], board[k + 10], board[k + 15], board[k + 20]].every(x => x === 'x')) {
                    return board
                        .filter(x => x !== 'x')
                        .reduce((a, b) => Number(a) + Number(b)) * Number(order[i])
                }
            }
        }
    }
}

console.log("Solution 1:", solution1(input, order))
