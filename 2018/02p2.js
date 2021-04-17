import fs from "fs";

const input = fs
  .readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split("").join(""));

const findSimilar = (instructions) => {
  let similar = [];
  let differentChar;
  for (let i = 0; i < instructions.length; i++) {
    const chosenString = instructions[i].split("");
    // console.log(chosenString);

    for (let j = i + 1; j < instructions.length; j++) {
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
          differentChar = chosenString[k];
          strikes += 1;
        }
        if (chosenString[k] !== comparedString[k] && strikes > 1) {
          similar = [];
          break;
        }
      }

      if (similar.length === (chosenString.length - 1)) {
        return [similar.join(""), differentChar];
      }
    }
  }
};

const result = findSimilar(input);
console.log(result);
