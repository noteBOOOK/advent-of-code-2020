const readFile = require('fs').readFileSync;

const file = readFile('./day04-data', 'utf-8').split('\n\n');

const data = file.map((e) => e.split(/[ '\n']+/));

const checkPassport = data => {
  validPassports = 0;
  
  data.forEach(passport => {
    const passportValidations = {
      byr: false,
      iyr: false,
      eyr: false,
      hgt: false,
      hcl: false,
      ecl: false,
      pid: false,
    }
    passport.forEach(validations => {
      [validation, value] = validations.split(":")
      if (passportValidations.hasOwnProperty(validation)) {
        passportValidations[validation] = true;
      }
    })

    if (Object.values(passportValidations).every((value) => value === true)) {
      validPassports++;
    }
  })
  return validPassports;
}

console.log(checkPassport(data));