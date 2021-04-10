import fs from "fs";

const input = fs.readFileSync("01.txt", "utf-8").trim();
const instructions = input.split(", ");
let nahorudolu = 0;
let dostran = 0;
let uhel = 0;
let opakovana = "";
const body = [];

instructions.forEach((instruction) => {
  const kudy = String(instruction.slice(0, 1));
  const kam = Number(instruction.slice(1));

  if (kudy === "R") uhel += 90;
  else uhel -= 90;
  uhel %= 360;
  // uhel = (kudy === "R" ? uhel + 90 : uhel - 90) % 360;

  if (uhel === 0) {
    for (let i = 0; i < kam; i++) {
      if (body.some((coord) => coord[0] === nahorudolu && coord[1] === dostran)
        && !opakovana) {
        opakovana = [nahorudolu, dostran];
      }
      body.push([nahorudolu, dostran]);
      nahorudolu += 1;
    }
  } else if (Math.abs(uhel) === 180) {
    for (let i = 0; i < kam; i++) {
      if (body.some((coord) => coord[0] === nahorudolu && coord[1] === dostran)
        && !opakovana) {
        opakovana = [nahorudolu, dostran];
      }
      body.push([nahorudolu, dostran]);
      nahorudolu -= 1;
    }
  } else if (uhel === 90 || uhel === -270) {
    for (let i = 0; i < kam; i++) {
      if (body.some((coord) => coord[0] === nahorudolu && coord[1] === dostran)
        && !opakovana) {
        opakovana = [nahorudolu, dostran];
      }
      body.push([nahorudolu, dostran]);
      dostran += 1;
    }
  } else if (uhel === 270 || uhel === -90) {
    for (let i = 0; i < kam; i++) {
      if (body.some((coord) => coord[0] === nahorudolu && coord[1] === dostran)
        && !opakovana) {
        opakovana = [nahorudolu, dostran];
      }
      body.push([nahorudolu, dostran]);
      dostran -= 1;
    }
  }


  /*
    if (souradnice.some((coord) => coord[0] === nahorudolu && coord[1] === dostran)) {
      console.log(nahorudolu, dostran);
    }
  
    if (souradnice.some((coord) => coord[0] === nahorudolu && coord[1] === dostran)
      && !opakovana) {
      opakovana = [nahorudolu, dostran];
    }
    souradnice.push([nahorudolu, dostran]);
  */


  // console.log(kudy, kam, uhel, nahorudolu, dostran);
});
// console.log(uhel);
// console.log(nahorudolu);

//console.log(JSON.stringify(souradnice), JSON.stringify(souradnice.map((el) => Math.abs(el[0]) + Math.abs(el[1]))));
const cesta = Math.abs(nahorudolu) + Math.abs(dostran);
const vzdalenostOpakovana = Math.abs(opakovana[0]) + Math.abs(opakovana[1]);
console.log(cesta, vzdalenostOpakovana);
