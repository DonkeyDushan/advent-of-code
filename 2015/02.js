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

const solveRibbon = (instructions) => {
  const bow = instructions.map(([l, w, h]) => l * w * h);
  const ribbons = instructions.map((oneBox) => sum(oneBox.sort((a, b) => a - b).slice(0, 2)) * 2);
  return sum(ribbons) + sum(bow);
};

const [paper, ribbon] = [solvePaper(input), solveRibbon(input)];
console.log(paper, ribbon);
