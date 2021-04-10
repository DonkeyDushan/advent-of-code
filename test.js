const clovek = {
  jmeno: "Michal",
  prijmeni: "Zlatkovsky",
  rekniAhoj: (osloveni) => `Ahoj ${osloveni}!`,
};

console.log(clovek.jmeno);
console.log(clovek.rekniAhoj("Michale"));

clovek.rekniAhoj = () => "Di doprdele!";

console.log(clovek.rekniAhoj("Michale!"));

// clovek.rekniAhoj = () => console.log("cus");

/*
const mySum = (add1, add2) => {
  const x = add1 + add2;
  return x;
};

console.log(mySum(6, 5));
*/

/*
zápis funkce
function tvojemama(arg1, arg2) {

}

(arg1, arg2) => {

}

klasický cyklus

for (let i = 0; i < chars.length; i++) {
}
*/
