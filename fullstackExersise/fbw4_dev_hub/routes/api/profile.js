const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const normalize = require('normalize-url');

//@route  GET api/profile/me
//@desc  get current user profile
//@access  Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    // if the profile exist poppulate user [name , avatar]
    res.json(profile); // insert [name , avatar] of found user
  } catch (error) {
    console.error(error.meddage);
    res.status(500).send('Server Error');
  }
});

//@route  POST api/profile
//@desc  create or update user profile
//@access  Private

router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is requires').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // if schould have a return?
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    console.log(req.body);
    const {
      company,
      location,
      website,
      bio,
      skills,
      status,
      githubusername,
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
    } = req.body;

    //Create Profile fields and Profile Objects
    const profileFields = {
      user: req.user.id,
      company,
      location,
      website,
      bio,
      skills: Array.isArray(skills)
        ? skills
        : skills.split(',').map((item) => ' ' + item.trim()),
      status,
      githubusername,
    };

    //Create social object
    const socialFields = {
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
    };

    for (const [key, value] of Object.entries(socialFields)) {
      if (value && value.length > 0) {
        socialFields[key] = normalize(value, { forceHttp: true });
      }
    }
    profileFields.social = socialFields;
    try {
      //using upsert option (creates new doc if no match is found)
      let profile = await Profile.findOneAndUpdate(
        {
          user: req.user.id,
        },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (error) {
      console.error(error.meddage);
      res.status(500).send('Server Error');
    }

    res.send('Hello');
  }
);

//@route  GET api/profile
//@desc  get all profile
//@access  Public

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (error) {
    console.error(error.meddage);
    res.status(500).send('Server Error');
  }
});

//@route  GET api/profile/user/:user_id
//@desc  Get profile by user id
//@access  Public

//:user_id will be part of the request params
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);
    if (!profile) {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.log(error.name);
    if (error.name == 'CastError') {
      return res.status(400).json({ msg: 'the uesr id is wrong formated' });
    }
    console.error(error.meddage);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
