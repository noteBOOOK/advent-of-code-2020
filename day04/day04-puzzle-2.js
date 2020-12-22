const readFile = require('fs').readFileSync;
const file = readFile('./day04-data', 'utf-8').split('\n\n');
const data = file.map((e) => e.split(/[ '\n']+/));




const validateBirthYear = year => {
  if (year >= 1920 && year <= 2002) {
    return true;
  }
  return false;
}

const validateIssueYear = year => {
  if (year >= 2010 && year <= 2020) {
    return true;
  }
  return false;
}


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
      // if (passportValidations.hasOwnProperty(validation)) {
      //   passportValidations[validation] = true;
      // }
      console.log("CHECK HERE!!!!!!!", validation, value);
    })

    if (Object.values(passportValidations).every((value) => value === true)) {
      validPassports++;
    }
  })
  
  return validPassports;
}

console.log(checkPassport(data));