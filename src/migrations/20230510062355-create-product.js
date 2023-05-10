'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      productName:{
       type:DataTypes.STRING,
       allowNull:false
      },
      productDescription:{
        type:DataTypes.STRING,
        allowNull:false
       },
       productImage:{
        type:DataTypes.STRING,
        allowNull:false
      },
       productPrice:{
        type:DataTypes.INTEGER,
        allowNull:false
       },
       doctorId:{
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
    await queryInterface.dropTable('products');
  }
};