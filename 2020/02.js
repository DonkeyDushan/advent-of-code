import fs from "fs";

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split(" ")
    .map((element2) => element2.replace(":", "").split("-")));

const checkPassword1 = (instructions) => {
  const legitPasswords = [];
  instructions.forEach((element) => {
    const character = element[1];
    const min = element[0][0];
    const max = element[0][1];
    const password = String(element[2]);
    const letterCount = (password.split(character).length - 1);
    if (letterCount >= min && letterCount <= max) legitPasswords.push(password);
  });
  return legitPasswords.length;
};

const checkPassword2 = (instructions) => {
  const legitPasswords = [];
  instructions.forEach((element) => {
    const character = String(element[1]);
    const first = (element[0][0] - 1);
    const second = (element[0][1] - 1);
    const password = String(element[2]).split("");
    let count = 0;

    if (password[first] === character) count += 1;
    if (password[second] === character) count += 1;

    if (count === 1) legitPasswords.push(password);
  });
  return legitPasswords.length;
};

const [part1, part2] = [checkPassword1(input), checkPassword2(input)];
console.log(part1, part2);
