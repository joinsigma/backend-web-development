import jwt from "jsonwebtoken";

export function createToken(payload) {
  return jwt.sign(payload, "test");
}

export function decodeToken(token) {
  return jwt.decode(token);
}
