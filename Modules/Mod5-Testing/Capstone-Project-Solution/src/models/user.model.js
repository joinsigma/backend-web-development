const UserModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(90),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      passport: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      passportExpiry: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: "customer",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
        onUpdate: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "user",
      timestamps: false,
    }
  );
};

export default UserModel;
