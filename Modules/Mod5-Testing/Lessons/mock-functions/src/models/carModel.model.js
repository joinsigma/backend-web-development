const CarModelModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "car_model",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      make: {
        type: DataTypes.STRING,
      },
      year: {
        type: DataTypes.INTEGER,
      },
      transmission: {
        type: DataTypes.CHAR,
      },
      bodyType: {
        type: DataTypes.INTEGER,
      },
      createdBy: {
        type: DataTypes.INTEGER,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "car_model",
      timestamps: true,
    }
  );
};

export default CarModelModel;
