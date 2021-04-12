import fs from "fs";
import combinatorics from "js-combinatorics";

const { bigCombination } = combinatorics;
const sum = (numbers) => numbers.reduce((previous, current) => previous + current, 0);

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((splitX) => splitX.split("x").map(Number));

const solvePaper = (instructions) => {
  const paperArrays = [];
  let totalPaper = 0;

  instructions.forEach((element) => {
    const paper = bigCombination(element, 2)
      .map((area) => area[0] * area[1] * 2);
    paperArrays.push(paper);
  });

  paperArrays.forEach((box) => {
    box.push((Math.min(...box.slice(0, 3))) / 2);
    totalPaper += sum(box);
  });

  return(totalPaper);
};

const result = solvePaper(input);
console.log(result);
