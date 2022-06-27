const languages = require("../data/languages.json");

const numberOfCountries = languages.filter((l) => !!l.country).length;

const countryWithMoreLanguagesAndHaveDE = () => {
  return languages
    .filter((l) => {
      return !!l.country && l.languages.includes("de");
    })
    .sort((a, b) => b.languages.length - a.languages.length)[0];
};

const countLanguagesOfCountries = languages.map((l) => ({
  ...l,
  languages: l.languages.length,
}));

const countryWithMoreLanguages = languages.sort(
  (a, b) => b.languages.length - a.languages.length
)[0].country;

const mostCommonLanguages = () => {
  const listLanguages = [];

  languages.forEach((l) => {
    l.languages.forEach((language) => {
      const languageAlreayInList = listLanguages.findIndex(
        (l) => l.language === language
      );

      if (languageAlreayInList === -1) {
        listLanguages.push({ language, count: 1 });
      } else {
        listLanguages[languageAlreayInList].count++;
      }
    });
  });

  const mostCountValue = listLanguages.sort((a, b) => b.count - a.count)[0]
    .count;

  return listLanguages.filter((l) => l.count === mostCountValue);
};

module.exports = {
  numberOfCountries,
  countryWithMoreLanguagesAndHaveDE,
  countLanguagesOfCountries,
  countryWithMoreLanguages,
  mostCommonLanguages,
};
