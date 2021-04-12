import fs from "fs";
import combinatorics from "js-combinatorics";

const { bigCombination } = combinatorics;
const sum = (numbers) => numbers.reduce((previous, current) => previous + current, 0);

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((splitX) => splitX.split("x").map(Number));

const solvePaper = (instructions) => {
  const paperArrays = instructions.map((element) => bigCombination(element, 2)
    .map((area) => area[0] * area[1] * 2))
    .map((box) => [...box, Math.min(...box) / 2]);

  const totalPaper = paperArrays.map((box) => sum(box));

  return sum(totalPaper);
};

const result = solvePaper(input);
console.log(result);
