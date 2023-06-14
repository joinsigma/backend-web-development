const HotelModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "hotel",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING(45),
        defaultValue: null,
      },
      checkInTime: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      checkOutTime: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      amenities: {
        type: DataTypes.STRING(255),
        defaultValue: null,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      tableName: "hotel",
      timestamps: true,
    }
  );
};

export default HotelModel;
