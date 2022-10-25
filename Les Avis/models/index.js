const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig');

const sequelize = new Sequelize(dbConfig.dbName,dbConfig.username,dbConfig.password, {
    host: dbConfig.host,
    dialect:dbConfig.dialect
  }); 
  
  // try {
  //   sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }

  const db = {}
  db.sequelize = sequelize;
  db.Sequelize = Sequelize

  db.sequelize.sync({force:false})
  .then(()=> {
    console.log('hadchi rah khdam')
  })

  module.exports = sequelize;