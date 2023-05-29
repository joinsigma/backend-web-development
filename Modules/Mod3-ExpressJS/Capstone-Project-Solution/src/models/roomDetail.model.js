const RoomDetailModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "room_detail",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(90),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      noOfBeds: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
      },
      bedType: {
        type: DataTypes.CHAR(45),
        allowNull: false,
        defaultValue: "single",
      },
      roomType: {
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
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "roomDetail",
      timestamps: false,
    }
  );
};

export default RoomDetailModel;
