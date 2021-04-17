import fs from "fs";

const input = fs
  .readFileSync("02.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map((element) => element.split("").sort().join(""));

console.log(input);

const checkRepeated = (instructions) => {
  let doublets = 0;
  let triplets = 0;
  instructions.forEach(element => {
    const repeated = [...element.matchAll(/(.)\1/g)];
    let addDoublets;
    let addTriplets;
    repeated.forEach((char) => {
      const character = char[1];
      console.log(character);
      const re = new RegExp(`(${character})\\1{2,2}`, "g");
      const x = re.test(element);
      if (x && !addTriplets) {
        addTriplets = true;
        triplets += 1;
      } else if (!x && !addDoublets) {
        addDoublets = true;
        doublets += 1;
      }
    });
    console.log(element, doublets, triplets);
  });
  return doublets * triplets;
};

console.log(checkRepeated(input));
