const faker = require('faker');

const hostels = [];

const generateHostels = (() => {
  for (var i = 0; i < 100; i++) {
    const hostel = {
      hosteName: faker.company.companyName()
    }
    hostels.push(hostel); 
  }
})();

module.exports.hostels = hostels;