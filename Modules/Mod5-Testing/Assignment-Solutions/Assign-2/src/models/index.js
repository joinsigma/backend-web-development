import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";

// Models
import ProductModel from "./product.model.js";
import ProductDetailModel from "./productDetail.model.js";
import StoreModel from "./store.model.js";
import UserModel from "./user.model.js";
import OrderModel from "./order.model.js";
import PaymentModel from "./payment.model.js";
import ProductOrderModel from "./productOrder.model.js";

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
    db.order = OrderModel(sequelize, Sequelize.DataTypes);
    db.productOrder = ProductOrderModel(sequelize, Sequelize.DataTypes);
    db.payment = PaymentModel(sequelize, Sequelize.DataTypes);

    // Store Model foreign keys
    db.store.belongsTo(db.user, {
      foreignKey: "ownerId",
    });
    db.user.hasMany(db.store, {
      foreignKey: "ownerId",
    });


    // Product Model foreign keys
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

    // Order Model foreign keys
    db.order.belongsTo(db.user, {
      foreignKey: "buyerId",
    });
    db.user.hasMany(db.order, {
      foreignKey: "buyerId",
    });
    db.order.belongsTo(db.store, {
      foreignKey: "storeId",
    });
    db.store.hasMany(db.order, {
      foreignKey: "storeId",
    });

    // Product Order Model foreign keys
    db.productOrder.belongsTo(db.order, {
      foreignKey: "orderId",
    });
    db.order.hasMany(db.productOrder, {
      foreignKey: "orderId",
    });
    db.productOrder.belongsTo(db.product, {
      foreignKey: "productId",
    });
    db.product.hasMany(db.productOrder, {
      foreignKey: "productId",
    });

    // Payment Model foreign keys
    db.payment.belongsTo(db.order, {
      foreignKey: "orderId",
    });
    db.order.belongsTo(db.payment, {
      foreignKey: "orderId",
    });


    db.sequelize.sync();
  }
  return db;
};

export const getConnection = () => {
  return db;
};
