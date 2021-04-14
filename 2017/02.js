import { sign } from "crypto";
import fs from "fs";
import combinatorics from 'js-combinatorics';

const { bigCombination } = combinatorics;

const sum = (array) => array.reduce((total, current) => total + current, 0);

const input = fs
  .readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split("\t").map(Number));

// console.log(input);

const solvePuzzle1 = (instructions) => {
  const differences = instructions.map((element) => {
    const min = Math.min(...element);
    const max = Math.max(...element);
    return Math.abs(max - min);
    /*
    const min = element.map((num) => Math.min(...element));
    const max = element.map((num) => Math.max(...element));
    sum += Math.abs(max - min);
    console.log(min);
    */
  });
  return sum(differences);
};

const solvePuzzle2 = (instructions) => {
  const arr = [];
  instructions.map((element) => {
    const combinedPairs = bigCombination(element, 2);

    combinedPairs.forEach((element) => {
      if (Math.max(...element) % Math.min(...element) === 0) {
        const x = Math.max(...element) / Math.min(...element);
        arr.push(x);
      }
    });
  });
  return sum(arr);
};

console.log(solvePuzzle1(input), solvePuzzle2(input));
