const CarModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "car",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      car_lot_id: {
        type: DataTypes.INTEGER,
      },
      car_model_id: {
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
      created_by: {
        type: DataTypes.INTEGER,
      },
      updated_by: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "car",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
};

export default CarModel;
