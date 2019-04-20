// const mongoose = require('mongoose');
// const onlineDb = require('../../config/keys');

// mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

// const db = mongoose.connection;

// mongoose.Promise = global.Promise;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('MongoDB is connected to the Users database, users collection');
// });

// const Schema = mongoose.Schema;


// const userInfoSchema = new Schema({
//   name: {
//     type: String
//   },
//   email: {
//     type: String,
//     lowercase: true,
//     // unique: true,
//     required: true
//   },
//   orders: [
//     {
//       ordered: {
//         type: Date,
//       },
//       company: String,
//       price: String
//     }
//   ],
//   password: {
//     type: String
//   },
//   addreslineone: {
//     type: String
//   },
//   addresslinetwo: {
//     type: String
//   },
//   city: {
//     type: String
//   },
//   state: {
//     type: String
//   },
//   zip: {
//     type: String
//   },
//   phone: {
//     type: String
//   },
//   creditcard: {
//     type: String
//   },
//   expirationdate: {
//     type: String
//   },
//   cvv: {
//     type: String
//   },
//   billingzipcode: {
//     type: String
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
// })

// const UserInfo = mongoose.model('userInfo', userInfoSchema)

// module.exports = UserInfo;