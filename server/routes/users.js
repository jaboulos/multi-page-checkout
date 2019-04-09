const express = require('express');
const router = express.Router();

// bring in item model
const User = require('../models/User');


// @route GET /allusers
router.get('/allusers', (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log('error: ', err))
})


// @route POST /pageOne
router.post('/pageone', (req, res, next) => {
const { name, email, password } = req.body

  const pageOne = new User({name, email, password})
  pageOne.save().then(user => res.json(user))
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

// @ route PUT /pagethree
router.put('/pagethree', (req, res, next) => {
  const { email, creditcard, expirationdate, cvv, billingzipcode} = req.body
    User.updateOne({email:email},
      {
        $set:
          {
            creditcard,
            expirationdate,
            cvv,
            billingzipcode
          }
      })
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log(err))
  });

module.exports = router;