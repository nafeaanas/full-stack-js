


const { Sequelize, DataTypes} = require('sequelize');
const Article = require('./articleModel');
const sequelize = require('./index.js');

const Commentaire = sequelize.define('Commentaires', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },

   
   
  });
  
  

  Article.hasMany(Commentaire);
  Commentaire.belongsTo(Article);

  // Commentaire.sync()
  // Commentaire.sync()

module.exports = Commentaire;
