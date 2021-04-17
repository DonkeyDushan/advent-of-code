import fs from "fs";

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split(" ")
    .map((element2) => element2.replace(":", "").split("-")));

const checkPassword = (instructions) => {
  const legitPasswords = [];
  instructions.forEach((element) => {
    const character = element[1];
    const min = element[0][0];
    const max = element[0][1];
    const password = String(element[2]);
    const letterCount = (password.split(character).length - 1);
    if (letterCount >= min && letterCount <= max) legitPasswords.push(password);
  });
  return(legitPasswords.length);
};

const result = checkPassword(input);
console.log(result);
