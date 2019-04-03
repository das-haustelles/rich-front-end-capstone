const faker = require('faker');

const generateBookings = (hostels, desiredBookings) => {
  const bookings = [];
  for (let i = 1; i <= hostels; i += 1) {
    for (let x = 0; x < desiredBookings; x += 1) {
      const booking = {
        hostel_id: i,
        bookedDate: faker.date.future(1, new Date()),
      };
      bookings.push(booking);
    }
  }
  return bookings;
};

module.exports.generateBookings = generateBookings;