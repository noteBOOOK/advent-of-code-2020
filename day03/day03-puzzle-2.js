const readFile = require('fs').readFileSync;

const file = readFile('./day03-data', 'utf-8').split('\n');

const countTrees = (data, xIncrement, yIncrement) => {
  let treeCount = 0;
  let x = 0;
  let y = 0;

  const xMax = data[0].split('').length - 1;
  const yMax = data.length - 1;

  while (y < yMax) {
    x += xIncrement;
    y + yIncrement;

    if (x > xMax) {
      x -= xMax + 1;
    }

    if (data[y][x] === '#'){
      treeCount++;
    }
  }
  return treeCount;
}

const countTreesTotal = data => {
  const result1 = countTrees(data, 1, 1);
  const result2 = countTrees(data, 3, 1);
  const result3 = countTrees(data, 5, 1);
  const result4 = countTrees(data, 7, 1);
  const result5 = countTrees(data, 1, 2);
  const total = result1 * result2 * result3 * result4 * result5;

  console.log(total);
}

countTreesTotal(file);