const express = require('express');
const router = express.Router();

// bring in item model
const UserInfo = require('../models/UserInfo');

// @route GET /alluserinfo
router.get('/alluserinfo', (req, res, next) => {
  UserInfo.find()
    .then(userinfo => res.json(userinfo))
    .catch(err => console.log('error: ', err))
})

// @route POST /submit
router.post('/saveuserinfo', (req, res, next) => {
  const saveUserInfo = new UserInfo(req.body)
  let { email, addresslineone, addresslinetwo, city, state, zip, phone } = req.body
  //let userEmail = req.body.email
  if(UserInfo.find({email})) {

    // then update the document
    UserInfo.updateOne({email:email},
      {
        $set:
          {
            email,
            addresslineone,
            addresslinetwo,
            city,
            state,
            zip,
            phone
          }
      })
      .then(userinfo => res.json(userinfo))
      .catch(err => console.log('error: ', err))
  }
    else if (!UserInfo.find({email})) {
      saveUserInfo.save().then(userinfo => res.json(userinfo))
    }
});



module.exports = router;