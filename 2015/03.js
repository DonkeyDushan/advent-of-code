import fs from "fs";

const input = fs.readFileSync("03.txt", "utf-8")
  .trim()
  .split("");

console.log(input);

const drawMap = (instructions) => {
  const listOfHouses = [];
  const currentHouse = [0, 0];
  instructions.forEach((element) => {
    if (element === "^") currentHouse[1] += 1;
    if (element === "v") currentHouse[1] -= 1;
    if (element === ">") currentHouse[0] += 1;
    if (element === "<") currentHouse[0] -= 1;
    listOfHouses.push(JSON.stringify(currentHouse));
  });
  const houseSet = new Set(listOfHouses);
  return houseSet.size;
};

const drawMapWithRoboSanta = (instructions) => {
  const listOfHouses = [];
  const currentHouseSanta = [0, 0];
  const currentHouseRoboSanta = [0, 0];
  let step = 1;
  instructions.forEach((element) => {
    if (step % 2 === 1) {
      if (element === "^") currentHouseSanta[1] += 1;
      if (element === "v") currentHouseSanta[1] -= 1;
      if (element === ">") currentHouseSanta[0] += 1;
      if (element === "<") currentHouseSanta[0] -= 1;
      listOfHouses.push(JSON.stringify(currentHouseSanta));
    } else {
      if (element === "^") currentHouseRoboSanta[1] += 1;
      if (element === "v") currentHouseRoboSanta[1] -= 1;
      if (element === ">") currentHouseRoboSanta[0] += 1;
      if (element === "<") currentHouseRoboSanta[0] -= 1;
      listOfHouses.push(JSON.stringify(currentHouseRoboSanta));
    }
    step += 1;
  });
  const houseSet = new Set(listOfHouses);
  return houseSet.size;
};

const [part1, part2] = [drawMap(input), drawMapWithRoboSanta(input)];
console.log(part1, part2);
