import fs from "fs";

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((line) => {
    const [range, character, password] = line.split(" ");
    return [range.split("-"), character.replace(":", ""), password];
  });

const checkPassword1 = (instructions) => {
  const legitPasswords = [];
  instructions.forEach(([[min, max], character, password]) => {
    const letterCount = password.split(character).length - 1;
    if (letterCount >= min && letterCount <= max) legitPasswords.push(password);
  });
  return legitPasswords.length;
};

const checkPassword2 = (instructions) => {
  const legitPasswords = [];
  instructions.forEach(([range, character, password]) => {
    const [first, second] = range.map((number) => number - 1);
    let count = 0;

    if (password[first] === character) count += 1;
    if (password[second] === character) count += 1;

    if (count === 1) legitPasswords.push(password);
  });
  return legitPasswords.length;
};

const [part1, part2] = [checkPassword1(input), checkPassword2(input)];
console.log(part1, part2);
