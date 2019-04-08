const express = require('express');
const router = express.Router();

// bring in item model
const User = require('../models/User');

// create routes

// @route GET /pageOne

// @route GET /checkout
router.get('/allusers', (req, res, next) => {
  // take the model and use find method to get all users
  User.find()
    .limit(10)
    .then(users => res.json({test}))
    .catch(err => console.log('error: ', err))
})


module.exports = router;