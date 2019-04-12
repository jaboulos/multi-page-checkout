const express = require('express');
const router = express.Router();

// bring in item model
const Order = require('../models/Order');

// @route GET /userorders
router.get('/userorders', (req, res, next) => {
  const { email } = req.body
  //User.find({email}, {$exists:true})
  Order.find({email })
    .sort({date: -1})
    .then(orders=> res.json(orders))
    .catch(err => console.log('error: ', err))
})

// @route POST /order
router.post('/order', (req, res, next) => {
  const orderInfo = new Order(req.body)
  orderInfo.save().then(order => res.json(order))
});

module.exports = router;