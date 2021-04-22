import fs from "fs";

const input = fs
  .readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n");

const findSimilar = (instructions) => {
  let result;

  for (let i = 0; i < instructions.length; i++) {
    const chosenString = instructions[i].split("");

    for (let j = i + 1; j < instructions.length; j++) {
      const similar = [];
      let differentChar = [0, "", ""];
      let firstStrike = false;
      const comparedString = instructions[j].split("");

      for (let k = 0; k < instructions[i].length; k++) {
        if (chosenString[k] === comparedString[k]) {
          similar.push(chosenString[k]);
        } else if (!firstStrike) {
          differentChar = [k, chosenString[k], comparedString[k]];
          firstStrike = true;
        } else {
          break;
        }
      }
      if (similar.length === (chosenString.length - 1)) {
        result = [similar.join(""), differentChar];
        break;
      }
    }
  }
  return result;
};

const result = findSimilar(input);
console.log(result);
