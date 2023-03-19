const { Sequelize } = require("sequelize");

const ProductModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productDetailId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.CHAR(45),
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: "product",
      timestamps: true,
    }
  );
};

export default ProductModel;
