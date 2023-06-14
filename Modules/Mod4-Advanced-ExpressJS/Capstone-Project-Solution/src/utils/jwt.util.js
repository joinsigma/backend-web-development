import jwt from "jsonwebtoken";

export function createToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY);
}

export function decodeToken(token) {
  return jwt.decode(token);
}
