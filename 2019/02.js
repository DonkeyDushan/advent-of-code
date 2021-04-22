/* eslint-disable no-param-reassign */
import fs from "fs";

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split(",")
  .map(Number);

const fixProgram1 = (instructions) => {
  instructions[1] = 12;
  instructions[2] = 2;
  for (let i = 0; i < instructions.length; i += 4) {
    const coord1 = instructions[i + 1];
    const coord2 = instructions[i + 2];
    const coord3 = instructions[i + 3];

    if (instructions[i] === 1) {
      instructions[coord3] = instructions[coord1] + instructions[coord2];
    }
    if (instructions[i] === 2) {
      instructions[coord3] = instructions[coord1] * instructions[coord2];
    }
    if (instructions[i] === 99) {
      break;
    }
    if (!instructions[coord3]) break;
  }
  return instructions[0];
};

const fixProgram2 = (instructions) => {
  let resultNoun;
  let resultVerb;

  for (let noun = 0; noun < 100; noun += 1) {
    for (let verb = 0; verb < 100; verb += 1) {
      const instructionsCopy = [...instructions];
      instructionsCopy[1] = noun;
      instructionsCopy[2] = verb;

      for (let i = 0; i < instructionsCopy.length; i += 4) {
        const coord1 = instructionsCopy[i + 1];
        const coord2 = instructionsCopy[i + 2];
        const coord3 = instructionsCopy[i + 3];

        if (instructionsCopy[i] === 1) {
          instructionsCopy[coord3] = instructionsCopy[coord1] + instructionsCopy[coord2];
        }
        if (instructionsCopy[i] === 2) {
          instructionsCopy[coord3] = instructionsCopy[coord1] * instructionsCopy[coord2];
        }
        if (instructionsCopy[i] === 99) {
          break;
        }
      }
      if (instructionsCopy[0] === 19690720) {
        resultNoun = noun;
        resultVerb = verb;
        break;
      }
    }
    if (resultNoun) break;
  }
  return resultNoun * 100 + resultVerb;
};

const [part1, part2] = [fixProgram1([...input]), fixProgram2(input)];
console.log(part1, part2);
