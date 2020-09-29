const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile')

// will be /api/get-review
router.get('/get-profile', async (req, res, next) => {

  // we need await , to get data first from MongoDB and then send it as an response to the route
  let profile = await Profile.find(); //find like in mongoDB

  res.send(profile)
})

router.post('/new-profile', async (req, res, next) => {
  let {
    firstName,
    lastName,
    email,
    company,
    website,
    location,
    skills,
    gitHub,
    bio,
    linkedIn,
    youtube,
  } = req.body;

  let newProfile = new Profile({
    firstName,
    lastName,
    email,
    company,
    website,
    location,
    skills,
    gitHub,
    bio,
    linkedIn,
    youtube,
  })
  console.log(newProfile);
  //.save returns a Promise
  newProfile.save()
    .then(response => {
      console.log(response);
      res.send({
        msg: 'new profile save',
        mongo_response: response
      })
    }).catch(error => {
      console.log(error);
      res.send({
        msg: error
      })
    })
})

router.put('/update-profile', (req, res) => {
  let {
    title,
    rating,
    comment,
    id
  } = req.body;

  //write only the varible as key
  let newData = {
    title,
    rating: parseInt(rating),
    comment
  }
  // find by Id and update the properties
  Profile.findByIdAndUpdate(id, newData)
    .then(response => {
      console.log(response);
      res.send({
        msg: 'Review was successfully updated',
        mongo_response: response
      })
    }).catch(error => {
      res.send({
        msg: error
      })
    })
})

router.delete('/delete-profile', (req, res) => {
  let {
    id
  } = req.body;

  Profile.findByIdAndDelete(id)
    .then(response => {
      console.log(response);
      res.send({
        msg: 'successfully deleted Review',
        response
      })
    }).catch(error => {
      res.send({
        msg: error
      })
    })
})


module.exports = router;