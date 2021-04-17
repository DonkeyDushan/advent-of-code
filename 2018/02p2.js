import fs from "fs";

const input = fs
  .readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n");

const findSimilar = (instructions) => {
  let result;

  for (let i = 0; i < instructions.length; i++) {
    const chosenString = instructions[i].split("");
    // console.log(chosenString);

    for (let j = i + 1; j < instructions.length; j++) {
      const similar = [];
      let differentChar;
      let strikes = 0;
      const comparedString = instructions[j].split("");
      // console.log("vs.", comparedString);

      for (let k = 0; k < instructions[i].length; k++) {
        // console.log(chosenString[k], comparedString[k]);
        if (chosenString[k] === comparedString[k] && strikes <= 1) {
          similar.push(chosenString[k]);
        }
        // console.log(similar);
        if (chosenString[k] !== comparedString[k] && strikes <= 1) {
          differentChar = [k, chosenString[k], comparedString[k]];
          strikes += 1;
        }
        if (chosenString[k] !== comparedString[k] && strikes > 1) {
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
