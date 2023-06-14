import { hashString, compareString } from "../../src/utils/hash.util.js";
import bcrypt from "bcrypt";

describe("bcrypt utility functions", () => {
  describe("hashString function", () => {
    it("should hash a string", async () => {
      const plainString = "password";
      const hashedString = await hashString(plainString);
      expect(hashedString).not.toBe(plainString);
    });

    it("should throw an error if stringToHash is not provided", async () => {
      await expect(hashString()).rejects.toThrow(
        "data and salt arguments required"
      );
    });
  });

  describe("compareString function", () => {
    it("should return true if strings match", async () => {
      const plainString = "password";
      const hashedString = await bcrypt.hash(plainString, 10);
      const isMatch = await compareString(plainString, hashedString);
      expect(isMatch).toBe(true);
    });

    it("should return false if strings do not match", async () => {
      const plainString = "password";
      const hashedString = await bcrypt.hash(plainString, 10);
      const isMatch = await compareString("password1", hashedString);
      expect(isMatch).toBe(false);
    });

    it("should throw an error if firstString or secondString is not provided", async () => {
      await expect(compareString()).rejects.toThrow(
        "data and hash arguments required"
      );
      await expect(compareString("password")).rejects.toThrow(
        "data and hash arguments required"
      );
    });
  });
});
