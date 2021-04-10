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
