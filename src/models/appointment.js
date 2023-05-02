'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{foreignKey:'userId'})
      this.belongsTo(models.scheduleAppointment, {foreignKey: 'scheduleId'})

    


    }
  }
  appointment.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false
    },
    date: {
      type:DataTypes.STRING,
      allowNull:false
    },
    time: {
      type:DataTypes.STRING,
      allowNull:false
    },
    userId:{
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    scheduleId:{
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    
    status:{
        type: DataTypes.ENUM('pending', 'female', 'approved')
      },
    

  }, {
    sequelize,
    tableName:'appointments',
    modelName: 'appointment',
  });
  return appointment;
};