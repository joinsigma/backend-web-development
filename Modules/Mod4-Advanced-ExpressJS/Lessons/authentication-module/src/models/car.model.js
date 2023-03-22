const CarModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "car",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      carLotId: {
        type: DataTypes.INTEGER,
      },
      carModelId: {
        type: DataTypes.INTEGER,
      },
      colour: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      regNo: {
        type: DataTypes.STRING,
      },
      regDate: {
        type: DataTypes.DATE,
      },
      initialMileage: {
        type: DataTypes.BIGINT,
      },
      status: {
        type: DataTypes.STRING,
      },
      createdBy: {
        type: DataTypes.INTEGER,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "car",
      timestamps: true,
    }
  );
};

export default CarModel;
