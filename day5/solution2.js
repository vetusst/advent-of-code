// Day 5

// Solution 2

const fs = require("fs");
let input = fs.readFileSync('./day5/input.txt', {
    encoding: 'utf-8'
})

input = input.split('\n')

const solution1 = (input) => {
    let coveredPoints = []

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(/[^\d]+/).filter(x => /\d/.test(x)).map(x => Number(x))

        let point = input[i]
        if (point[0] === point[2]) {
            for (let j = Math.min(point[1], point[3]); j < Math.max(point[1], point[3]) + 1; j++) coveredPoints.push([point[0], j])
        } else if (point[1] === point[3]) {
            for (let j = Math.min(point[0], point[2]); j < Math.max(point[0], point[2]) + 1; j++) coveredPoints.push([j, point[1]])
        } else if (Math.abs(point[0] - point[2]) === Math.abs(point[1] - point[3])) {
            for (let j = 0; j < Math.abs(point[0] - point[2]) + 1; j++) {
                coveredPoints.push([point[0] < point[2] ? point[0] + j : point[0] - j, point[1] < point[3] ? point[1] + j : point[1] - j])
            }
        }
    }

    let counter = 0
    for (let i = 0; i < coveredPoints.length; i++) {

        let initLength = coveredPoints.length
        for (let j = i + 1; j < coveredPoints.length; j++) {
            if (coveredPoints[i][0] === coveredPoints[j][0] && coveredPoints[i][1] === coveredPoints[j][1]) coveredPoints.splice(j, 1)
        }

        if (initLength > coveredPoints.length) counter ++
    }
    
    return counter
}

console.log(solution1(input))