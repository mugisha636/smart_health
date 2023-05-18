'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contact.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false
    
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    tableName:'Contacts',
    modelName: 'contact',
  });
  return contact;
};