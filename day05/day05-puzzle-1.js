const readFile = require('fs').readFileSync;
const data = readFile('./day05-data', 'utf-8').split('\n');

const numFinder = (str, bottom, top, max) => {
  let lo = 0;
  let hi = max;

  for (let char of str) {
    const mid = Math.floor((lo + hi) / 2);
    if (char === bottom) {
      hi = mid;
    } else if (char === top) {
      lo = mid;
    }
  }
  return lo;
}

const seatFinder = data => {
  const seatIds = data.map(line => {
    const rowStr = line.slice(0, 7);
    const colStr = line.slice(7);
    const rowNum = numFinder(rowStr, 'F', 'B', 128);
    const colNum = numFinder(colStr, 'L', 'R', 8);
    return (8 * rowNum) + colNum;
  })
  return Math.max(...seatIds);
}

console.log(seatFinder(data));