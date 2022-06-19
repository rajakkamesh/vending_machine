'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    short_description: DataTypes.TEXT,
    description: DataTypes.TEXT,
    tags: DataTypes.TEXT,
    image: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};