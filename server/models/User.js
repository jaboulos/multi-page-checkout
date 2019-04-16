const mongoose = require('mongoose');
const onlineDb = require('../../config/keys');

mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected to the Users database, users collection');
});

const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    lowercase: true,
    // unique: true,
    required: true
  },
  company: {
    type: String,
    default: 'Amazon'
  },
  price: {
    type: Number,
    default: 0
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
    type: Number
  },
  phone: {
    type: Number
  },
  creditcard: {
    type: String
  },
  creditcardnumber: {
    type: Number
  },
  expirationdate: {
    type: Number
  },
  cvv: {
    type: Number
  },
  billingzipcode: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
})

const User = mongoose.model('user', userSchema)

module.exports = User;