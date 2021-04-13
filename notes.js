// dokumentace js-combinatorics: https://github.com/dankogai/js-combinatorics/tree/0c54be9bc197478628e2ddac3314532e93c3af39
import combinatorics from 'js-combinatorics';

// objekt: properties + "metoda"
const clovek = {
  jmeno: "Michal",
  prijmeni: "Zlatkovsky",
  rekniAhoj: (osloveni) => `Ahoj ${osloveni}!`,
};

// součet přes reduce
const nums = [1, 2, 38, 59090];
const sum = (numbers) => numbers.reduce((previous, current) => previous + current, 0);
console.log(sum(nums));

// zápis funkce - "dlouhý"
function tvojemama(arg1, arg2) {
  return arg1 + arg2;
}

// zápis funkce - "krátký", arrow function
const tvojemamaNew = (arg1, arg2) => {
  return arg1 + arg2;
};

// totéž, oneliner
const tvojemamaNewShort = (arg1, arg2) => arg1 + arg2;

const chars = ["a", "b", "c"];
// klasický cyklus
for (let i = 0; i < chars.length; i++) {

}

// "nový" cyklus
Array(chars).fill(0).forEach(() => {

});

// kopie arraye tak, aby se nezměnila původní
const newChars = [...chars];

// zaokrouhleni
Math.round(3.5); // 4, klasicky
Math.floor(3.9); // 3, dolů
Math.ceil(3.1); // 4, nahoru

// destructuring
const destrArr = [[1, 2, 3], [4, 5, 6]];
console.log(destrArr.map(([a, b, c]) => a * c));

const destrObj = [{ length: 2, width: 3, height: 4 }, { length: 5, width: 6, height: 7 }];
console.log(destrObj.map(({ length, height }) => length * height));
