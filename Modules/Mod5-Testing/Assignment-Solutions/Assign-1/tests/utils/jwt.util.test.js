import { createToken, decodeToken } from "../../src/utils/jwt.util.js";

describe("jwt util functions", () => {
  const payload = { username: "testuser" };
  let token;

  describe("createToken", () => {
    it("should create a JWT token", () => {
      token = createToken(payload);
      expect(typeof token).toBe("string");
    });
  });

  describe("decodeToken", () => {
    it("should decode a JWT token", () => {
      const decodedPayload = decodeToken(token);
      expect(decodedPayload).toHaveProperty("username");
      expect(decodedPayload["username"]).toBe("testuser");
    });
  });
});
