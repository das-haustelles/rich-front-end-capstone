const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const moment = require('moment');
const db = require('../db/index');
const models = require('./models/models');

const PORT = process.env.port || 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/hostels/:id', (req, res) => {
  const hostelId = req.params.id;
  models.hostels.get(hostelId, (data) => {
    const hostel = {
      checkInDate: moment(data[0].checkInDate),
      checkOutDate: moment(data[0].checkOutDate),
    };
    res.status(200).send(hostel);
  });
});

app.get('/hostels/:id/bookings', (req, res) => {
  const hostelId = req.params.id;
  models.bookings.get(hostelId, (data) => {
    const bookedDates = [];
    for (let i = 0; i < data.length; i += 1) {
      bookedDates.push(moment(data[i].bookedDate));
    }
    res.status(200).send(bookedDates);
  });
});

app.listen(PORT, () => { console.log(`server running at: http://localhost:${PORT}`); });
