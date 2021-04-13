import fs from "fs";

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split(""));

const solveCode1 = (instructions) => {
  const keyboard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  const check = (coord) => {
    if (coord < 0) coord = 0;
    if (coord > 2) coord = 2;
    return coord;
  };
  const coordinates = [1, 1];
  const totalCoordinates = instructions.map((element) => {
    element.forEach((step) => {
      if (step === "U") coordinates[0] = check(coordinates[0] -= 1);
      if (step === "D") coordinates[0] = check(coordinates[0] += 1);
      if (step === "L") coordinates[1] = check(coordinates[1] -= 1);
      if (step === "R") coordinates[1] = check(coordinates[1] += 1);
    });
    return [...coordinates];
  });
  const code = totalCoordinates.map((element) => keyboard[element[0]][element[1]]);

  return code.join("");
};

console.log(solveCode1(input));

// =========================================================================

const solveCode2 = (instructions) => {
  const allCoords = [
    [-1, -1, 1, -1, -1],
    [-1, 2, 3, 4, -1],
    [5, 6, 7, 8, 9],
    [-1, "A", "B", "C", -1],
    [-1, -1, "D", -1, -1],
  ];

  const check = (oldCoordY, newCoordY, oldCoordX, newCoordX) => {
    if (newCoordY >= allCoords.length
      || newCoordY < 0
      || newCoordX >= allCoords.length
      || newCoordX < 0
      || allCoords[newCoordY][newCoordX] === -1) return [oldCoordY, oldCoordX];

    return [newCoordY, newCoordX];
  };

  let coordinates = [2, 0];
  const totalCoordinates = instructions.map((element) => {
    element.forEach((step) => {
      if (step === "U") coordinates = check(coordinates[0], coordinates[0] - 1, coordinates[1], coordinates[1]);
      if (step === "D") coordinates = check(coordinates[0], coordinates[0] + 1, coordinates[1], coordinates[1]);
      if (step === "L") coordinates = check(coordinates[0], coordinates[0], coordinates[1], coordinates[1] - 1);
      if (step === "R") coordinates = check(coordinates[0], coordinates[0], coordinates[1], coordinates[1] + 1);
    });
    return coordinates;
  });

  const totalCode = totalCoordinates
    .map((element) => allCoords[element[0]][element[1]]);

  return totalCode.join("");
};

const code = solveCode2(input);
console.log(code);
