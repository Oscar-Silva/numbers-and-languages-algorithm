const MAX_SAFE_PRINTS = 100000

const numberIsDivisibleBy = (number, divisor) => number % divisor === 0

const printValueByNumber = (value) => {
  if (numberIsDivisibleBy(value, 3) && numberIsDivisibleBy(value, 5)) return 'Visual Nuts'

  if (numberIsDivisibleBy(value, 3)) return 'Visual'

  if (numberIsDivisibleBy(value, 5)) return 'Nuts'

  return value
}

const printAllowedNumbers = (totalPrints) => {
  let actualNumber = 1;

  if (totalPrints < 1) {
    throw new Error('The number of prints must be greater than 0')
  }

  if (totalPrints > MAX_SAFE_PRINTS) {
    throw new Error('The number of prints must be less than ' + MAX_SAFE_PRINTS)
  }

  for (;actualNumber <= totalPrints; actualNumber++) {    
    console.log(printValueByNumber(actualNumber))
  }
}

module.exports = {
  printAllowedNumbers,
  printValueByNumber,
  numberIsDivisibleBy,
  MAX_SAFE_PRINTS,
}