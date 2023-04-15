'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Medical_consultations', {
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
    },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Medical_consultations');
  }
};