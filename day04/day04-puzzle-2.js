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


console.log(validateHairColor('#12eabc'));

// const checkPassport = data => {
//   validPassports = 0;
//   data.forEach(passport => {
//     const passportValidations = {
//       byr: false,
//       iyr: false,
//       eyr: false,
//       hgt: false,
//       hcl: false,
//       ecl: false,
//       pid: false,
//     }

//     passport.forEach(validations => {
//       [validation, value] = validations.split(":")
//       // if (passportValidations.hasOwnProperty(validation)) {
//       //   passportValidations[validation] = true;
//       // }
//       console.log("CHECK HERE!!!!!!!", validation, value);
//     })

//     if (Object.values(passportValidations).every((value) => value === true)) {
//       validPassports++;
//     }
//   })
  
//   return validPassports;
// }
