import fs from "fs";

const input = fs.readFileSync("01.txt", "utf-8")
  .trim()
  .split("\r\n");

const solveFuel = (instructions) => {
  const totalFuel = [];
  const totalFuelForFuel = [];

  instructions.forEach((element) => {
    const fuel = (((element - (element % 3)) / 3) - 2);
    totalFuel.push(fuel);
  });

  totalFuel.forEach((element) => {
    while (element > 0) {
      element = (((element - (element % 3)) / 3) - 2);
      if (element > 0) totalFuelForFuel.push(element);
    }
  });

  const sum = (numbers) => numbers.reduce((previous, current) => previous + current, 0);
  return [sum(totalFuel), (sum(totalFuel) + sum(totalFuelForFuel))];
};

const result = solveFuel(input);
console.log(result);
