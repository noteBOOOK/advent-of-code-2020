const readFile = require('fs').readFileSync;

const file = readFile('./day04-data', 'utf-8').split('\n\n');

const data = file.map((e) => e.split(/[ '\n']+/));

const checkPassport = data => {

  data.forEach(passport => {
    console.log("NEW PASSPORT!!!!!!!!!!!!!!!!!!: ");
    passport.forEach(validations => {
      console.log(validations)
    })
  })

}

checkPassport(data);