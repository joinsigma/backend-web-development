import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";

// Models
import CarModel from "./car.model.js";
import CarModelModel from "./carModel.model.js";
import UserModel from "./user.model.js";

const db = {};

export const startDbConnection = (hostname, username, password) => {
  const env = process.env.NODE_ENV;
  let sequelize = null;
  if (!sequelize) {
    sequelize = new Sequelize(dbConfig[env].DB, username, password, {
      host: hostname,
      dialect: dbConfig[env].dialect,
      logging: env === "test" ? false : console.log,
    });
    db.sequelize = sequelize;
    db.car = CarModel(sequelize, Sequelize.DataTypes);
    db.carModel = CarModelModel(sequelize, Sequelize.DataTypes);
    db.user = UserModel(sequelize, Sequelize.DataTypes);

    db.carModel.hasMany(db.car, {
      foreignKey: "carModelId",
    });
    db.car.belongsTo(db.carModel, {
      foreignKey: "carModelId",
    });

    db.sequelize.sync();
  }
  return db;
};

export const getConnection = () => {
  return db;
};
