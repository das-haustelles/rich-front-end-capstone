const Sequelize = require('sequelize');

const sequelize = new Sequelize('fec', 'root', 'root', {
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

const Hostel = sequelize.define('Hostel', {
  hostelName: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

const Booking = sequelize.define('Booking', {
  bookedDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  hostel_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Hostel,
      key: 'id'
    } 
  }
});

sequelize.sync()
  .then(() => {
    sequelize.close();
  });

module.exports.sequelize = sequelize;
