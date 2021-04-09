import fs from "fs";

const input = fs.readFileSync("01.txt", "utf-8").trim();

// input = "()(";

const chars = input.split("");

// chars = ["(", ")", "("];
// chars.indexOf("(");
// chars.includes(")");
// chars.forEach((value, index) => {

// });

let floor = 0;
let firstBasement;

chars.forEach((character, index) => {
  if (character === "(") floor += 1;
  if (character === ")") floor -= 1;
  if (floor <= -1 && !firstBasement) {
    firstBasement = index + 1;
  }
});

console.log(`Patro je ${floor}, druhá část ${firstBasement}`);
