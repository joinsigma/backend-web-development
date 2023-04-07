import { decodeToken } from "../utils/jwt.util.js";

export default function authMiddleware(req, res, next) {
  const token = req.header("Authorization")?.replace(/^Bearer /, "");
  if (!token) throw Error("No Authorization Token provided");
  const data = decodeToken(token);
  if (data.expiredAt <= Date.now()) {
    return res.status(401).json({
      message: "Auth Token is expired",
    });
  }
  req.userId = data.userId;
  next();
}
