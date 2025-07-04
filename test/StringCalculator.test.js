const {add} = require("../src/stringCalculator");
const calculator = require("../src/stringCalculator");
describe("Step 1 - Basic tests", () => {
  test("Empty string returns 0", () => {
    expect(add("")).toBe(0);
  });
  test("Single number returns itself", () => {
    expect(add("1")).toBe(1);
  })
  test("Two numbers returns sum", () => {
    expect(add("1,2")).toBe(3);
  })
  test("Multiple Comma separated numbers returns sum", () => {
    expect(add("1,2,3")).toBe(6);
  })
  test("New line separated numbers returns sum", () => {
    expect(add("1\n2,3")).toBe(6);
  })
  test("Custom Delimiter in //;\\n1;2 format returns sum", () => {
    expect(add("//;\n1;2")).toBe(3);
  })
  test("Negative number throws error", () => {
    expect(() => add("1,-2,3")).toThrow("Negatives not allowed: -2");
  })
  test("Multiple negative numbers throw exception with all negatives in message", () => {
    expect(() => add("1,-2,3,-6")).toThrow("Negatives not allowed: -2,-6");
  })
  test("GetCalledCounts returns number of times add was called", () => {
    calculator.resetCounts();
    calculator.add("1");
    calculator.add("2");
    calculator.add("3");
    expect( calculator.getCalledCounts()).toBe(3);
  })
  test("Numbers bigger than 1000 are ignored", () => {
    expect(add("1001,2")).toBe(2);
  })
  test("Delimiters of any length are supported using //[***]\\n format", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  })
});


