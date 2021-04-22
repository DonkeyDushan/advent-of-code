import fs from "fs";

const input = fs
  .readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split("").sort().join(""));

const checkRepeated = (instructions) => {
  let doublets = 0;
  let triplets = 0;
  instructions.forEach((instruction) => {
    const repeated = [...instruction.matchAll(/(.)\1/g)];
    let addDoublets = false;
    let addTriplets = false;
    repeated.forEach((char) => {
      const character = char[1];
      const hasTriplet = instruction.includes(`${character}${character}${character}`);
      if (hasTriplet) addTriplets = true;
      else addDoublets = true;
    });
    doublets += +addDoublets;
    triplets += +addTriplets;
  });
  return doublets * triplets;
};

console.log(checkRepeated(input));
