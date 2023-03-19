import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";

// Models
import ProductModel from "./product.model.js";
import ProductDetailModel from "./productDetail.model.js";
import StoreModel from "./store.model.js";
import UserModel from "./user.model.js";

const db = {};

export const startDbConnection = (hostname, username, password) => {
  let sequelize = null;
  if (!sequelize) {
    sequelize = new Sequelize(dbConfig.DB, username, password, {
      host: hostname,
      dialect: dbConfig.dialect,
    });
    db.sequelize = sequelize;
    db.user = UserModel(sequelize, Sequelize.DataTypes);
    db.store = StoreModel(sequelize, Sequelize.DataTypes);
    db.product = ProductModel(sequelize, Sequelize.DataTypes);
    db.productDetail = ProductDetailModel(sequelize, Sequelize.DataTypes);

    db.store.belongsTo(db.user, {
      foreignKey: "ownerId",
    });
    db.user.hasMany(db.store, {
      foreignKey: "ownerId",
    });

    db.product.belongsTo(db.productDetail, {
      foreignKey: "productDetailId",
    });
    db.productDetail.hasMany(db.product, {
      foreignKey: "productDetailId",
    });

    db.product.belongsTo(db.store, {
      foreignKey: "storeId",
    });
    db.store.hasMany(db.product, {
      foreignKey: "storeId",
    });

    db.sequelize.sync();
  }
  return db;
};

export const getConnection = () => {
  return db;
};
