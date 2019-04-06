const faker = require('faker');

const generateHostels = (desiredFakeHostels) => {
  const hostels = [];
  for (let i = 0; i < desiredFakeHostels; i += 1) {
    const hostel = {
      hostelName: faker.company.companyName(),
    };
    hostels.push(hostel);
  }
  return hostels;
};

module.exports.generateHostels = generateHostels;
