// Day 5 

// Solution 1

const fs = require("fs");
const path = require('path');
let input = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {encoding: 'utf-8'})

let [cratesRaw, proceduresRaw] = input.split('\r\n\r\n');

const getCrates = (cratesRaw) => {
    const crates = cratesRaw.split('\r\n')
    const numbers = crates.pop()
    const numbersArr = numbers.trim().split(/\D+/)
    return numbersArr.map((num) => 
        crates.reduce((acc, curr) => ([...acc, curr[numbers.indexOf(num)]]), []).filter(el => /\w/.test(el)).reverse()
    );
}


const solution = () => {
    const crates = getCrates(cratesRaw);
    const procedures = proceduresRaw.split('\r\n')

    procedures.forEach((proc) => {
       const [number, source, target] = proc.replace(/\D+/, '').split(/\D+/);

        for (let i = 0; i < number; i++) {
            const item = crates[source - 1].pop();
            crates[target - 1].push(item);
        }
    })

    return crates.reduce((acc, curr) => (acc + curr[curr.length - 1]), '');
}

console.log(solution());