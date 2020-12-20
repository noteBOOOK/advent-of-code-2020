const readFile = require('fs').readFileSync;

const file = readFile('./day04-data', 'utf-8').split('\n\n');

const data = file.map((e) => e.split(/[ '\n']+/));
data.forEach((p) => {
  p.forEach((f) => {
    console.log(f.split(':'))
  })
})