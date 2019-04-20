// const mongoose = require('mongoose');
// const onlineDb = require('../../config/keys');

// mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

// const db = mongoose.connection;

// mongoose.Promise = global.Promise;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('MongoDB is connected to the Users database, orders collection');
// });

// const Schema = mongoose.Schema;


// const orderSchema = new Schema({
//   email: {
//     type: String,
//     lowercase: true,
//     required: true
//   },
//   company: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
// })

// const Order = mongoose.model('order', orderSchema)

// module.exports = Order;