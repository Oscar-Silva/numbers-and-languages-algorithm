const {
  countLanguagesOfCountries,
  countryWithMoreLanguagesAndHaveDE,
  numberOfCountries,
  countryWithMoreLanguages,
  mostCommonLanguages,
} = require("./services/languages-worker");
const {printAllowedNumbers} = require("./services/print-allowed-numbers");


const args = process.argv.slice(2);

switch(args[0]) {
  case "languages": {
    console.log('Number of countries =>', numberOfCountries);
    console.log('Country with more languages and have DE => ', countryWithMoreLanguagesAndHaveDE());
    console.log('Count languages of the countries =>', countLanguagesOfCountries);
    console.log('Country with more languages =>', countryWithMoreLanguages);
    console.log('Most common languages =>', mostCommonLanguages());
    break;
  }
  case "print-numbers": {
    printAllowedNumbers(args[1] || 100)
    break;
  }
}