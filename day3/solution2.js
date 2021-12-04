// Day 3

// Solution 2

const fs = require("fs");
let input = fs.readFileSync('./day3/input.txt', {encoding: 'utf-8'})

input = input.split('\n')

const solution2 = (input) => {
    let bit1;
    let bit2;
    let oxygenRating = [...input]
    let scrubberRating = [...input]
    for (let i = 0; i < input[0].length - 1; i++) {
        bit1 = oxygenRating.reduce((a, b) => a + Number(b[i]), 0);
        bit2 = scrubberRating.reduce((a, b) => a + Number(b[i]), 0);
        if (oxygenRating.length > 1) oxygenRating = oxygenRating.filter(x => bit1 * 2 >= oxygenRating.length ? x[i] === '1' : x[i] === '0')
        if (scrubberRating.length > 1) scrubberRating = scrubberRating.filter(x => bit2 * 2 < scrubberRating.length ? x[i] === '1' : x[i] === '0')
    }
    return parseInt(oxygenRating.join(''), 2) * parseInt(scrubberRating.join(''), 2)
}

console.log(solution2(input))
