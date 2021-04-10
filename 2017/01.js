import fs from "fs";

const input = fs.readFileSync("01.txt", "utf-8")
  .trim()
  .split("") // ["1", "2", "3"]
  .map(Number); // .map((element) => Number(element)) = [1, 2, 3]

const solveCaptchaOne = (instructions) => {
  const firstNumber = instructions[0];
  instructions.push(firstNumber);

  let sum = 0;
  let numberBefore;

  instructions.forEach((character) => {
    if (character === numberBefore) sum += character;
    numberBefore = character;
  });

  return sum;
};

const solveCaptchaTwo = (instructions) => {
  const arrayLength = instructions.length;
  let sum2 = 0;

  instructions.forEach((character, index) => {
    const pairedNumberIndex = (index + arrayLength / 2) % arrayLength;
    if (character === instructions[pairedNumberIndex]) sum2 += character;
  });
  return sum2;
};

// ===============================================
// const arr = [1, 2, 3]
// const [firstEl, ...arr]
// rest: ...arr == 1, 2, 3
// const newArr = [...arr] // [1, 2, 3]
const [part1, part2] = [solveCaptchaOne([...input]), solveCaptchaTwo([...input])];

console.log(part1, part2);
