const keyboard = [
  [1],
  [2, 3, 4],
  [5, 6, 7, 8, 9],
  ["A", "B", "C"],
  ["D"],
];

const legitimateCoordinates = (keyboard) => {
  const totalCoordinates = [];
  const array = [0, 1, 2, 3, 4];

  keyboard.map((row) => {
    let i = 0;
    const maxLength = keyboard[Math.floor(keyboard.length / 2)].length;
    const coordinates = [];
    const newArray = array.slice(0, (maxLength - row.length / 2))
      .concat(array.slice((maxLength - row.length / 2) + row.length));
    row.forEach((coord) => {
      if (newArray.includes(i)) coordinates.push(-1);
      else coordinates.push(i);
      i += 1;
    });
    totalCoordinates.push(coordinates);
  });
  return totalCoordinates;
};

console.log(legitimateCoordinates(keyboard));

