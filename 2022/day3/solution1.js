// Day 3 

// Solution 1

const fs = require("fs");
let input = fs.readFileSync('./input.txt', {encoding: 'utf-8'})

input = input.split('\n').map(x => Number(x))


// divide a string by half and store each half in an array
const divideString = (str) => [str.slice(0, Math.floor(str.length / 2)), str.slice(Math.floor(str.length / 2))];
const inputArr = input.split('\n').map((line) => divideString(line));

// write alphabet to the string
const alphabet = 


const solution1 = () => {


};