const {add} = require("../src/stringCalculator");

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
});


