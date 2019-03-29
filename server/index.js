const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../db/index');
const PORT = process.env.port || 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {console.log(`server running at: http://localhost:${PORT}`)});