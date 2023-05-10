'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{foreignKey:'userId'})
      this.belongsTo(models.product,{foreignKey:'productId'})


    }
  }
  purchase.init({
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
     }

  }, {
    sequelize,
    modelName: 'purchase',
  });
  return purchase;
};