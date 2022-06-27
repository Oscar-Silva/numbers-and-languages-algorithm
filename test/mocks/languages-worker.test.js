const {
  countLanguagesOfCountries,
  countryWithMoreLanguagesAndHaveDE,
  numberOfCountries,
  countryWithMoreLanguages,
  mostCommonLanguages,
} = require("../../src/services/languages-worker");
const languagesFixture = require("../mocks/languagesMock.json");

jest.mock("../../src/data/languages.json", () => require("../mocks/languagesMock.json"));

describe("Languages worker unit test", () => {
  it("numberOfCountries should be return the number of countries", () => {
    expect(numberOfCountries).toBe(languagesFixture.length);
  });

  it("The function countryWithMoreLanguagesAndHaveDE should be return the country with more language and that has DE", () => {
    expect(countryWithMoreLanguagesAndHaveDE()).toStrictEqual({
      country: "BE",
      languages: ["nl", "fr", "de"],
    });
  });

  it("countLanguagesOfCountries should be return the number of languages of each country", () => {
    expect(countLanguagesOfCountries).toEqual(
      expect.arrayContaining([
        { country: "BE", languages: 3 },
        { country: "DE", languages: 1 },
      ])
    );
  });

  it("countryWithMoreLanguages should be return the country with more languages", () => {
    expect(countryWithMoreLanguages).toBe("BE");
  });

  it("mostCommonLanguages should be return the most common languages", () => {
    expect(mostCommonLanguages()).toStrictEqual([
      { count: 2, language: "nl", },
      { count: 2,language: "de",},
    ]);
  });
});
