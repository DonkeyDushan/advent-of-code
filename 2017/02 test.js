import combinatorics from 'js-combinatorics';

const combinations = [[5, 9], [5, 2], [9, 2], [5, 8], [9, 8], [2, 8]];

const divided = (combinations) => {
  let x;
  combinations.forEach((element) => {
    if (Math.max(...element) % Math.min(...element) === 0) {
      x = Math.max(...element) / Math.min(...element);
    }
  });
  return x;
};

console.log(divided(combinations));
