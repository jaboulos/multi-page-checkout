const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// db configuration
const configFolder = require('../config/keys');

mongoose.Promise = global.Promise;

// connect to routes directory
const users = require('./routes/users');
const orders = require('./routes/orders');
const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/../build`));

// body parser
app.use(bodyParser.json());

mongoose.connect(configFolder.mongoURI, { useNewUrlParser: true });

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});


// use routes
app.use('/', users, orders);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
