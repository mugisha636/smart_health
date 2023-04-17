'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4,
      },
      userId:{
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        type: DataTypes.UUID
      },
      doctorId:{
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        type: DataTypes.UUID
      },
      description: {
        type: DataTypes.STRING
      },
      date: {
        type:DataTypes.STRING,
        allowNull:false
      },
      status:{
        type: DataTypes.ENUM('pending', 'female', 'approved'),
        defaultValue:'pending'
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
    await queryInterface.dropTable('appointments');
  }
};