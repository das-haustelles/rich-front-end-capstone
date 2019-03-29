const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../db/index');
const models = require('./models/models');

const PORT = process.env.port || 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));


app.get('/hostels/:id/bookings', (req, res) => {
  const hostelId = req.params.id;
  models.bookings.get(hostelId, (bookings) => {
    res.status(200).send(bookings);
  });
});

app.listen(PORT, () => { console.log(`server running at: http://localhost:${PORT}`); });
