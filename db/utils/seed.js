const Sequelize = require('sequelize');
const db = require('../index');
const hostels = require('../utils/hostels');
const bookings = require('../utils/bookings');

const numOfHostels = 100;
const numOfBookings = 50;

const mockHostels = hostels.generateHostels(numOfHostels);
const mockBookings = bookings.generateBookings(numOfHostels, numOfBookings);

const Hostel = db.sequelize.define('Hostel', {
  hostelName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  roomName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  roomDescription: {
    type: Sequelize.STRING,
    allowNull: false
  },
  roomPrice: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  }
});

const Booking = db.sequelize.define('Booking', {
  bookedDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  hostel_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Hostel,
      id: 'id'
    }
  }
});

// Booking.hasOne(Hostel); 

db.sequelize.drop()
  .then(() => {
    db.sequelize.sync()
      .then(() => {
        Hostel.bulkCreate(mockHostels)
          .then(() => {
            Booking.bulkCreate(mockBookings)
              .then(() => {
                db.sequelize.close()
              });
          });
      })
  });

  