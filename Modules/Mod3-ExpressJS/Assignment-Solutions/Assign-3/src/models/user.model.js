const { Sequelize } = require("sequelize");

const UserModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(90),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      type: {
        type: DataTypes.CHAR(45),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "user",
      timestamps: false,
    }
  );
};

export default UserModel;
