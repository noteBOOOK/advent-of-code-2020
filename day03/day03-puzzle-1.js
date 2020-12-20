const readFile = require('fs').readFileSync;

const file = readFile('./day03-data', 'utf-8').split('\n');

const countTrees = data => {

  let treeCount = 0;
  let x = 0;
  let y = 0;

  const xMax = data[0].split('').length - 1;
  const yMax = data.length - 1;

  while (y < yMax) {
    x += 3;
    y++;

    if (x > xMax) {
      x -= xMax + 1;
    }

    if (data[y][x] === '#'){
      treeCount++;
    }
  }
  console.log(treeCount);

}

countTrees(file);