import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";

// Models
import CarModel from "./car.model.js";
import CarModelModel from "./carModel.model.js";

const db = {};

export const startDbConnection = (hostname, username, password) => {
  let sequelize = null;
  if (!sequelize) {
    sequelize = new Sequelize(
      dbConfig.DB,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        dialect: dbConfig.dialect,
      }
    );
    db.sequelize = sequelize;
    db.car = CarModel(sequelize, Sequelize.DataTypes);
    db.carModel = CarModelModel(sequelize, Sequelize.DataTypes);

    db.carModel.hasMany(db.car, {
      foreignKey: "car_model_id",
    });
    db.car.belongsTo(db.carModel, {
      foreignKey: "car_model_id",
    });

    db.sequelize.sync();
  }
  return db;
};

export const getConnection = () => {
  return db;
};
