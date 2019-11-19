const { simpleFix, stockPrices } = require("./script");
describe("simpleFix function", function() {
  test("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });
  test("array exists", () => {
    expect(stockPrices).toBeDefined();
  });
  test("function was passed something", () => {
    expect(simpleFix).toBeDefined();
  });
  test("it was an array", () => {
    expect(typeof stockPrices).toBe("object");
  });
  test("returns correct answer", () =>
    expect(simpleFix()).toBe(16.480000000000018));
});
