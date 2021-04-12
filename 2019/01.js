import fs from "fs";

const sum = (numbers) => numbers.reduce((previous, current) => previous + current, 0);

const input = fs.readFileSync("01.txt", "utf-8")
  .trim()
  .split("\r\n");

const solveFuel = (instructions) => {
  const totalFuelForFuel = [];

  const part1 = instructions
    .reduce((previous, current) => previous + (Math.floor(current / 3)) - 2, 0);

  instructions.forEach((element) => {
    while (element > 0) {
      element = (Math.floor(element / 3)) - 2;
      if (element > 0) totalFuelForFuel.push(element);
    }
  });

  return [part1, sum(totalFuelForFuel)];
};

const result = solveFuel(input);
console.log(result);
