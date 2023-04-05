'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doctors.init({
    id: {
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull:false
    },
    lastName: {
      type:DataTypes.STRING,
    allowNull:false
  },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      isEmail: true,
    },
    telephone: {
      type:DataTypes.STRING,
      allowNull:false
    },
    specialized_in:{
      type:DataTypes.STRING,
      allowNull:false
    },
    from:{
      type:DataTypes.STRING,
      allowNull:false
    },
    to:{
      type:DataTypes.STRING,
      allowNull:false
    },
    profile_image: DataTypes.STRING(10000),
    password:{
      type:DataTypes.STRING,
      allowNull:false
    }
   
  }, {
    sequelize,
    tableName:'Doctors',
    modelName: 'doctors',
  });
  return doctors;
};