import fs from "fs";

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split(""));

const solveCode = (instructions) => {
  const keyboard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const totalCoordinates = [];
  const code = [];

  const check = (coord) => {
    if (coord < 0) coord = 0;
    if (coord > 2) coord = 2;
    return coord;
  }

  instructions.forEach((element) => {
    let coordinates = [1, 1]
    element.forEach((step) => {
      if (step === "U") coordinates[0] = check(coordinates[0] -= 1);
      if (step === "D") coordinates[0] = check(coordinates[0] += 1);
      if (step === "L") coordinates[1] = check(coordinates[1] -= 1);
      if (step === "R") coordinates[1] = check(coordinates[1] += 1);
    });
    totalCoordinates.push(coordinates);
  });

  totalCoordinates.forEach((element) => {
    const pieceOfCode = keyboard[element[0]][element[1]];
    code.push(pieceOfCode);
  });

  return code.join("")
}

const code = solveCode(input);
console.log(code);
