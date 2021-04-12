import fs from "fs";
import combinatorics from "js-combinatorics";

const { bigCombination } = combinatorics;
const sum = (numbers) => numbers.reduce((previous, current) => previous + current, 0);

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((splitX) => splitX.split("x").map(Number));

const solvePaper = (instructions) => {
  const boxes = instructions.map((rawBox) => {
    const sideCombinations = bigCombination(rawBox, 2);
    const boxArea = sideCombinations.map((area) => area[0] * area[1] * 2);
    return sum([...boxArea, Math.min(...boxArea) / 2]);
  });

  return sum(boxes);
};

const result = solvePaper(input);
console.log(result);
