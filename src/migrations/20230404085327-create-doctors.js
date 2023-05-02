'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Doctors', {
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
    },
      createdAt: {
        allowNull: false,
        type: DataTypes.STRING
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Doctors');
  }
};