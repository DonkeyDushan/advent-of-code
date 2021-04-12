import fs from "fs";
import combinatorics from "js-combinatorics";

const { bigCombination } = combinatorics;

const input = fs.readFileSync("01.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map(Number); // map((el) => Number(el))

const solveExpenses = (instructions) => {
  const correctTwoPair = bigCombination(instructions, 2)
    .find((twoPair) => twoPair[0] + twoPair[1] === 2020);

  return (correctTwoPair[0] * correctTwoPair[1]);
};

const result = solveExpenses(input);
console.log(result);
