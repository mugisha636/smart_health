'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.doctors,{foreignKey:'doctorId'})
    this.hasMany(models.purchase,{foreignKey:'productId'})


    }
  }
  product.init({
    id: {
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    productImage:{
      type:DataTypes.STRING,
      allowNull:false
    },
    productName:{
     type:DataTypes.STRING,
     allowNull:false
    },
    productDescription:{
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
     }
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};