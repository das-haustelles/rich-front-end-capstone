const faker = require('faker');

const generateHostels = (desiredFakeHostels) => {
  const hostels = [];
  for (var i = 0; i < desiredFakeHostels; i++) {
    const hostel = {
      hostelName: faker.company.companyName(),
      roomName: faker.commerce.productName(),
      roomDescription: faker.lorem.sentences(3), 
      roomPrice: faker.commerce.price(14, 115)
    }
    hostels.push(hostel); 
  }
  return hostels;
};

module.exports.generateHostels = generateHostels;
