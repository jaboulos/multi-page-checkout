const mongoose = require('mongoose');
const onlineDb = require('../../config/keys');

mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected to the Users database');
});

const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: {
    type: String,
    // lowercase: true
  },
  email: {
    type: String,
  },
  password: {
    type: String
  },
  addreslineone: {
    type: String
  },
  addresslinetwo: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  phone: {
    type: String
  },
  creditcard: {
    type: String
  },
  expirationdate: {
    type: String
  },
  cvv: {
    type: String
  },
  billingzipcode: {
    type: String
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User;