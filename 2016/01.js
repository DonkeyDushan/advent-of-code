import fs from "fs";

const input = fs
  .readFileSync("01.txt", "utf-8")
  .trim()
  .split(", ");

const findPath = (instructions) => {
  let y = 0;
  let x = 0;
  let angle = 0;
  let visited;
  const steps = [];

  instructions.forEach((instruction) => {
    const direction = String(instruction.slice(0, 1));
    const distance = Number(instruction.slice(1));

    if (direction === "R") angle += 90;
    else angle -= 90;
    angle %= 360;
    // uhel = (kudy === "R" ? uhel + 90 : uhel - 90) % 360;

    Array(distance).fill(0).forEach(() => {
      if (steps.some((coord) => coord[0] === y && coord[1] === x)
        && !visited) {
        visited = [y, x];
      }
      steps.push([y, x]);

      if (angle === 0) y += 1;
      else if (Math.abs(angle) === 180) y -= 1;
      else if (angle === 90 || angle === -270) x += 1;
      else if (angle === 270 || angle === -90) x -= 1;
    });
  });

  const finalPoint = Math.abs(y) + Math.abs(x);
  const firstVisitedPoint = Math.abs(visited[0]) + Math.abs(visited[1]);
  return [finalPoint, firstVisitedPoint];
};

const [part1, part2] = findPath(input);
console.log(`Konec cesty je vzdálen ${part1} metrů od startu, 
první dvakrát navštívená souřadnice je ${part2} metrů daleko od startu.`);
