const faker = require('faker');

const generateBookings = (hostels, desiredBookings) => {
  const bookings = [];
  for(var i = 1; i <= hostels; i++) {
    for (var x = 0; x < desiredBookings; x++) {
      const booking = {
        hostel_id: i,
        bookedDate: faker.date.future(1, new Date()),
      }
      bookings.push(booking);
    }
  }
  return bookings;
}

module.exports.generateBookings = generateBookings;