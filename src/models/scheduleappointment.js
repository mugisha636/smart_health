'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scheduleAppointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.doctors,{foreignKey:'docId'})
      this.hasOne(models.appointment, {
        foreignKey: 'scheduleId',
       
      });

    }
  }
  scheduleAppointment.init({
    id: {
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    docId:{
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      type: DataTypes.UUID
    },

    date: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    tableName:'scheduleAppointments',
    modelName: 'scheduleAppointment',
  });
  return scheduleAppointment;
};