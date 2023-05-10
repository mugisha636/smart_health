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
    static associate({medical_consultation,product,scheduleAppointment}) {
      // define association here
      this.hasMany(scheduleAppointment,{foreignKey:'docId'})

    this.hasMany(product,{foreignKey:'doctorId'})
      
      this.hasMany(medical_consultation,{foreignKey:'doctorId'})
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
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    isVerified: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }

   
  }, {
    sequelize,
    tableName:'Doctors',
    modelName: 'doctors',
  });
  return doctors;
};