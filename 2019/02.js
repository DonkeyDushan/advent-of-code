/* eslint-disable no-param-reassign */
import { NOTFOUND } from "dns";
import fs from "fs";

const input = fs.readFileSync("02.txt", "utf-8")
  .trim()
  .split(",")
  .map(Number);

const fixProgram1 = (instructions) => {
  const instructionsCopy = [...instructions];
  instructionsCopy[1] = 12;
  instructionsCopy[2] = 2;
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
    if (!instructionsCopy[coord3]) break;
  }
  return instructionsCopy[0];
};

const fixProgram2 = (instructions) => {
  let resultNoun;
  let resultVerb;

  for (let noun = 0; noun < 100; noun += 1) {
    for (let verb = 0; verb < 100; verb += 1) {
      const instructionsCopy = [...instructions];
      instructionsCopy[1] = noun;
      instructionsCopy[2] = verb;

      for (let i = 0; i < instructions.length; i += 4) {
        const coord1 = instructionsCopy[i + 1];
        const coord2 = instructionsCopy[i + 2];
        const coord3 = instructionsCopy[i + 3];

        if (instructionsCopy[i] === 1) {
          instructionsCopy[coord3] = instructionsCopy[coord1] + instructionsCopy[coord2];
        }
        if (instructions[i] === 2) {
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

const [part1, part2] = [fixProgram1(input), fixProgram2(input)];
console.log(part1, part2);
