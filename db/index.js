const Sequelize = require('sequelize');
const config = require('./utils/config');

const sequelize = new Sequelize('fec', config.userName, config.userPass, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unabel to connect to the database:' , err);
  });


module.exports.sequelize = sequelize;