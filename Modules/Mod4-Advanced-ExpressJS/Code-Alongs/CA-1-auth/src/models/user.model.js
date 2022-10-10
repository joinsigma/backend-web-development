const UserModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "car",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName: {
          type: DataTypes.STRING,
        },
        lastName: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        username: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        type: {
          type: DataTypes.STRING,
        },
        zipCode: {
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
        tableName: "car",
        timestamps: true,
      }
    );
  };
  
  export default UserModel;
  