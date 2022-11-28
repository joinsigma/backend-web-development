import { returnUpperCase, convertToUpperCase } from "../src/string.js";

describe("should test returnUpperCase", () => {
  test("with lowercase string", () => {
    const res = returnUpperCase("pavithra");
    //   expect(res).toBe("PAVI");
    expect(res).toMatch(/PAVI/);
    expect(res).toContain("PAVI");
  });
});

describe("should test convertToUpperCase", () => {
    test("with lowercase string", () => {
      const res = convertToUpperCase("pavithra");
      //   expect(res).toBe("PAVI");
      expect(res).toMatch(/PAVI/);
      expect(res).toContain("PAVI");
    });

    test("with uppercase string", () => {
        const res = convertToUpperCase("PAVI");
        //   expect(res).toBe("PAVI");
        expect(res).toMatch(/PAVI/);
        expect(res).toContain("PAVI");
      });
  });
  