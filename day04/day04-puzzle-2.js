const readFile = require('fs').readFileSync;
const file = readFile('./day04-data', 'utf-8').split('\n\n');
const data = file.map((e) => e.split(/[ '\n']+/));




const validateYear = (year, min, max) => {
  return year >= min && year <= max;
}

const validateHeight = height => {
  const unit = height.slice(-2);
  const value = height.slice(0, height.length - 2)

  if (unit === "cm") {
    return value >= 150 && value <= 193;
  } else if (unit === "in") {
    return value >= 59 && value <= 76;
  }
}

const validateHairColor = hair => {
  const regex = /#[0-9a-f]{6}/

  if (hair.length === 7){
    if (regex.test(hair)){
      return true;
    }
  }
  return false;
}

const validateEyeColor = eye => {
  const validColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  if (validColors.includes(eye)) {
    return true;
  }
  return false;
}

const validatePID = id => {
  const regex = /[0-9]{9}/

  if (id.length === 9) {
    if (regex.test(id)) {
      return true;
    }
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

      switch(validation) {
        case 'byr':
          passportValidations[validation] = validateYear(value, 1920, 2002);
          break;
        case 'iyr':
          passportValidations[validation] = validateYear(value, 2010, 2020);
          break;
        case 'eyr':
          passportValidations[validation] = validateYear(value, 2020, 2030);
          break;
        case 'hgt':
          passportValidations[validation] = validateHeight(value);
          break;
        case 'hcl':
          passportValidations[validation] = validateHairColor(value);
          break;
        case 'ecl':
          passportValidations[validation] = validateEyeColor(value);
          break;
        case 'pid':
          passportValidations[validation] = validatePID(value);
          break;
      }
    })

    if (Object.values(passportValidations).every((value) => value === true)) {
      validPassports++;
    }
  })
  
  return validPassports;
}

console.log(checkPassport(data));
