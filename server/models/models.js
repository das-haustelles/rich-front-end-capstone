const db = require('../../db/index');

module.exports = {
  hostels: {

  },
  bookings: {
    get: (hostelId, callback) => {
      return db.Booking.findAll({
        where: {
          hostel_id: hostelId
        }
      })
        .then((bookings) => {
          callback(bookings);
        });
    }
  }
}