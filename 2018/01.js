import fs from "fs";

const input = fs.readFileSync("01.txt", "utf-8")
  .trim()
  .split("\r\n");

const solveFrequency = (instructions) => {
  let sum = 0;
  const sumSet = new Set();
  let repeatedFrequency;
  while (!repeatedFrequency) {
    for (let i = 0; i < instructions.length; i++) {
      sum += Number(instructions[i]);
      if (sumSet.has(sum) && !repeatedFrequency) {
        repeatedFrequency = sum;
      }
      sumSet.add(sum);
    }
  }
  return [sum, repeatedFrequency];
};

const result = solveFrequency(input);
console.log(result);
