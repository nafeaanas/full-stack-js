

const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./index.js');

const Category = sequelize.define('Categories', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }
   
  });
  
  

//   Category.sync()

module.exports = Category;
