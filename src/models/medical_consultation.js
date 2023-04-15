'use strict';
const { allow } = require('joi');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medical_consultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({doctors}) {
      // define association here
      this.belongsTo(doctors,{foreignKey:'doctorId'})
    }
  }
  medical_consultation.init({
    id: {
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    doctorId:{
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    category: {
      type:DataTypes.STRING,
    allowNull:false,
    unique:true
    },
    health_issue:{
      type: DataTypes.STRING,
    allowNull:false,
  unique:true
},
    description: {type:DataTypes.STRING,
    allowNull:false,
  unique:true
},
    medical_advice: {
      type:DataTypes.STRING,
    allowNull:false,
  }
  }, {
    sequelize,
    tableName:"Medical_consultations",
    modelName: 'medical_consultation',
  });
  return medical_consultation;
};