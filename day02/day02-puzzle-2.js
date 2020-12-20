const readFile = require('fs').readFileSync;

const file = readFile('./day02-data', 'utf-8')
  .split('\n')
  .filter((res) => res.trim())
  .filter((line) => {
    const [rule, password] = line.split(': ');

    let [, firstNum, secondNum, letter] = rule.match(/(\d+)\-(\d+) (\w)/);
    firstNum = parseInt(firstNum, 10);
    secondNum = parseInt(secondNum, 10);

    const firstIndex = firstNum - 1;
    const secondIndex = secondNum - 1;
    const split = password.split('');

    if (split[firstIndex] === letter) {
      if (split[secondIndex] !== letter) {
        return true;
      }
    }

    if (split [secondIndex] === letter) {
      if (split[firstIndex] !== letter) {
        return true;
      }
    }

    return false;

  })

  console.log(file.length);