const {add} = require("../src/stringCalculator");

describe("Step 1 - Basic tests", () => {
  test("Empty string returns 0", () => {
    expect(add("")).toBe(0);
  });
  test("Single number returns itself", () => {
    expect(add("1")).toBe(1);
  })
});


