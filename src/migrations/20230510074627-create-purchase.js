'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('purchases', {
      id: {
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      quantity:{ 
        type:DataTypes.INTEGER
      },
      productId:{
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        type: DataTypes.UUID
       },
       userId:{
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        type: DataTypes.UUID
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
    await queryInterface.dropTable('purchases');
  }
};