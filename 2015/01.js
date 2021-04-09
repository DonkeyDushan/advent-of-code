import fs from "fs";

const input = fs.readFileSync("01.txt", "utf-8");

const chars = input.split("");

chars.forEach((character, index) => {
  console.log({ char: character, ind: index });
});
