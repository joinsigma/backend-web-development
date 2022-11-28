import { add, multiply, sumArray, isEven } from "../src/math.js";

describe("should test add", () => {
  test("with 2 positive integers", () => {
    const res = add(2, 2);
    expect(res).toBe(4);
  });
  test("with 2 negative integers", () => {
    const res = add(-2, -2);
    expect(res).toBe(-4);
  });
});

describe("should test multiply", () => {
  test("with 2 positive integers", () => {
    const res = multiply(2, 3);
    expect(res).toBe(6);
  });
});

describe("should test sumArray", () => {
  test("with a list of 3 items", () => {
    const res = sumArray([1, 2, 3]);
    expect(res).toBe(6);
  });
});

describe("should test isEven", () => {
  test("with an even number", () => {
    const res = isEven(2);
    expect(res).toBe(true);
  });

  test("with an odd number", () => {
    const res = isEven(3);
    expect(res).toBe(false);
  });
});
