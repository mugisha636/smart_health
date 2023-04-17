'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.UserSession, {
        foreignKey: 'userId',
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      this.hasMany(models.appointment,{foreignKey:'userId'})




    }
  }
  User.init({
    id: {
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    firstName: {
      type:DataTypes.STRING
    },
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type:DataTypes.STRING,
      defaultValue:'user'},
    isVerified: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName:"users",
    modelName: 'User',
  });
  return User;
};