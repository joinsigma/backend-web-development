import { ValidationErrorItemType } from "sequelize";

export default function errorMiddleware(error, req, res, next) {
  console.debug(`Error in ${error.stack}`, error);
  return res.status(500).json({
    error: "Something went wrong!",
    message: error.message,
  });
}
