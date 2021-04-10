import fs from "fs";

const input = fs
  .readFileSync("01.txt", "utf-8")
  .trim()
  .split("");

const solveElevator = (instructions) => {
  let floor = 0;
  let firstBasement;

  instructions.forEach((character, index) => {
    if (character === "(") floor += 1;
    if (character === ")") floor -= 1;
    if (floor <= -1 && !firstBasement) {
      firstBasement = index + 1;
    }
  });

  return [floor, firstBasement];
};

const [part1, part2] = solveElevator(input);
// šlo by i jako const result =, ale potom je zmatenější console log:
// (`Patro je ${result[0]}, druhá část ${result[1]}`)

console.log(`Patro je ${part1}, druhá část ${part2}`);
