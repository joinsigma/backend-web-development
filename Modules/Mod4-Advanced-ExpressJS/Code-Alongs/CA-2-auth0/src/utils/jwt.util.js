import jwt from "jsonwebtoken";

export function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY);
}
