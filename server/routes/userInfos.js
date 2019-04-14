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

  //let userEmail = req.body.email

      saveUserInfo.save().then(userinfo => res.json(userinfo))
      .catch(err => console.log('error: ', err))

});



module.exports = router;