const express = require('express');
const router = express.Router();

// bring in item model
const User = require('../models/User');

// @route GET /allusers
// router.get('/allusers', (req, res, next) => {
//   User.find()
//     .sort({ date: -1 })
//     .then(users => res.json(users))
//     .catch(err => console.log('error: ', err))
// })
router.get('/', (req, res, next) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch(err => console.log('error: ', err))
})

// @route POST /submit
router.post('/saveinfo', (req, res, next) => {
  const saveInfo = new User(req.body)
  saveInfo.save().then(user => res.json(user))
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