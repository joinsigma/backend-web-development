import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";

// Models
import HotelModel from "./hotel.model.js";
import RoomModel from "./room.model.js";
import RoomDetailModel from "./roomDetail.model.js";
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
    db.hotel = HotelModel(sequelize, Sequelize.DataTypes);
    db.room = RoomModel(sequelize, Sequelize.DataTypes);
    db.roomDetail = RoomDetailModel(sequelize, Sequelize.DataTypes);
    db.user = UserModel(sequelize, Sequelize.DataTypes);

    // Relationship between Hotel and Room
    db.room.belongsTo(db.hotel, {
      foreignKey: "hotelId",
    });
    db.hotel.hasMany(db.room, {
      foreignKey: "hotelId",
    });

    // Relationship between Room and RoomDetail
    db.room.belongsTo(db.roomDetail, {
      foreignKey: "roomDetailId",
    });

    db.roomDetail.hasOne(db.room, {
      foreignKey: "roomDetailId",
    });

    db.sequelize.sync();
  }
  return db;
};

export const getConnection = () => {
  return db;
};
