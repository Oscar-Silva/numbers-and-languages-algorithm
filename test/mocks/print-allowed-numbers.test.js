const { numberIsDivisibleBy, printValueByNumber, printAllowedNumbers, MAX_SAFE_PRINTS } = require("../../src/services/print-allowed-numbers");

describe("Print allowed numbers unit test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  it("When the numberIsDivisibleBy function has called and given a number and divisor and test if the number is divisible by divisor value", () => {
    expect(numberIsDivisibleBy(3, 3)).toBe(true);
    expect(numberIsDivisibleBy(3, 5)).toBe(false);
    expect(numberIsDivisibleBy(3, 7)).toBe(false);
    expect(numberIsDivisibleBy(5, 3)).toBe(false);
    expect(numberIsDivisibleBy(5, 5)).toBe(true);
    expect(numberIsDivisibleBy(5, 7)).toBe(false);
    expect(numberIsDivisibleBy(7, 3)).toBe(false);
    expect(numberIsDivisibleBy(7, 5)).toBe(false);
    expect(numberIsDivisibleBy(7, 7)).toBe(true);
  });

  it('When the printValueByNumber function has called and gived a divisible by 3 number, then return string with "Visual" value', () => {
    expect(printValueByNumber(3)).toBe("Visual");
    expect(printValueByNumber(9)).toBe("Visual");
    expect(printValueByNumber(2)).not.toBe("Visual");
  });

  it('When the printValueByNumber function has called and gived a divisible by 5 number, then return string with "Nuts" value', () => {
    expect(printValueByNumber(5)).toBe("Nuts");
    expect(printValueByNumber(10)).toBe("Nuts");
    expect(printValueByNumber(1)).not.toBe("Nuts");
  });

  it('When the printValueByNumber function has called and gived a divisible by 3 and 5 number, then return string with "Visual Nuts" value', () => {
    expect(printValueByNumber(15)).toBe("Visual Nuts");
    expect(printValueByNumber(30)).toBe("Visual Nuts");
    expect(printValueByNumber(1)).not.toBe("Visual Nuts");
  })

  it('When the printAllowedNumbers function has called and the totalPrints parameter is less than 1, then throw an error', () => {
    expect(() => printAllowedNumbers(0)).toThrowError("The number of prints must be greater than 0");
    expect(() => printAllowedNumbers(-1)).toThrowError("The number of prints must be greater than 0");
    expect(() => printAllowedNumbers(1)).not.toThrowError("The number of prints must be greater than 0");
  })

  it('When the printAllowedNumbers function has called and the totalPrints parameter is greater than MAX_SAFE_PRINTS, then throw an error', () => {
    expect(() => printAllowedNumbers(MAX_SAFE_PRINTS + 1)).toThrowError("The number of prints must be less than " + MAX_SAFE_PRINTS);
    expect(() => printAllowedNumbers(MAX_SAFE_PRINTS)).not.toThrowError("The number of prints must be less than " + MAX_SAFE_PRINTS);
    expect(() => printAllowedNumbers(MAX_SAFE_PRINTS - 1)).not.toThrowError("The number of prints must be less than " + MAX_SAFE_PRINTS);
  })

  it('When the printAllowedNumbers function has called and the totalPrints parameter is less or equal than MAX_SAFE_PRINTS, then print the numbers', () => {
    printAllowedNumbers(MAX_SAFE_PRINTS);
    expect(console.log).toHaveBeenCalledTimes(MAX_SAFE_PRINTS);
  })

  it('When printAllowedNumber function has called, call the console log with the correct params', () => {
    printAllowedNumbers(16);
    expect(console.log).toHaveBeenCalledWith(1);
    expect(console.log).toHaveBeenCalledWith(2);
    expect(console.log).toHaveBeenCalledWith("Visual");
    expect(console.log).toHaveBeenCalledWith("Nuts");
    expect(console.log).toHaveBeenCalledWith("Visual Nuts");
    expect(console.log).toHaveBeenCalledWith(16);    
  })
})


