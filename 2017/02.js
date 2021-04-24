import fs from "fs";
import combinatorics from "js-combinatorics";

const { bigCombination } = combinatorics;

const sum = (array) => array.reduce((total, current) => total + current, 0);

const input = fs
  .readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split("\t").map(Number));

const solvePuzzle1 = (instructions) => {
  const differences = instructions.map((element) => {
    const max = Math.max(...element);
    const min = Math.min(...element);
    return max - min;
  });
  return sum(differences);
};

const solvePuzzle2 = (instructions) => {
  const divisions = instructions.map((row) => {
    const correctPair = bigCombination(row, 2)
      .find((pair) => Math.max(...pair) % Math.min(...pair) === 0);
    return Math.max(...correctPair) / Math.min(...correctPair);
  });
  return sum(divisions);
};

console.log(solvePuzzle1(input), solvePuzzle2(input));
