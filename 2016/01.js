import fs from "fs";

const input = fs.readFileSync("01.txt", "utf-8").trim();
const chars = input.split(", ");
let nahorudolu = 0;
let dostran = 0;
let uhel = 0;

chars.forEach((instruction) => {
  const kudy = String(instruction.slice(0, 1));
  const kam = Number(instruction.slice(1));

  if (kudy === "R") uhel += 90;
  else uhel -= 90;
  uhel %= 360;
  //uhel = (kudy === "R" ? uhel + 90 : uhel - 90) % 360;

  if (uhel === 0) nahorudolu += kam;
  else if (Math.abs(uhel) === 180) nahorudolu -= kam;
  else if (uhel === 90 || uhel === -270) dostran += kam;
  else if (uhel === 270 || uhel === -90) dostran -= kam;
  //console.log(kudy, kam, uhel, nahorudolu, dostran);
});
//console.log(uhel);
//console.log(nahorudolu);

const cesta = Math.abs(nahorudolu) + Math.abs(dostran);
console.log(cesta);

/* chars.forEach((character) => {
*/
