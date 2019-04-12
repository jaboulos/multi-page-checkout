const express = require('express');
const router = express.Router();

// bring in item model
const User = require('../models/User');
const Order = require('../models/Order');

// @route GET /allusers
router.get('/allusers', (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log('error: ', err))
})

// @route GET /userorders
router.get('/userorders', (req, res, next) => {
  const { email } = req.body
  //User.find({email}, {$exists:true})
  Order.find({email })
    .sort({date: -1})
    .then(orders=> res.json(orders))
    .catch(err => console.log('error: ', err))
})

// @route POST /submit
router.post('/saveinfo', (req, res, next) => {
  const saveInfo = new User(req.body)
  saveInfo.save().then(user => res.json(user))
});

// @route POST /order
router.post('/order', (req, res, next) => {
  const orderInfo = new Order(req.body)
  orderInfo.save().then(order => res.json(order))
});


// @route PUT /pagetwo
router.put('/pagetwo', (req, res, next) => {
  const { email, addresslineone, addresslinetwo, city, state, zip, phone } = req.body
    User.updateOne({email:email},
      {
        $set:
          {
            addresslineone,
            addresslinetwo,
            city,
            state,
            zip,
            phone
          }
      })
    .then((data) => {
      res.json(data);
    })
    .catch(err =>  console.log(err))
  });


module.exports = router;