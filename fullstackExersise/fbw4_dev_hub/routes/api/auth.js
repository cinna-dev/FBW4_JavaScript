const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { check, validationResult } = require('express-validator');

const User = require('../../models/Users');
const auth = require('../../middleware/auth');
//@route  GET api/auth
//@desc     GET user by token     //description
//@access  private

// when useing multiple middlewares put them into an array
router.get('/', auth, async (req, res) => {
  //try to find one user by id
  console.log(req.user.id);
  try {
    let user = await User.findById(req.user.id).select('-password'); // muss password nicht enthalten //ohne minus muss es password enthalten
    res.json(user);
    // if the user exist
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
  //catch the error. set status to 500, sind Server error
});

//@route  POST api/auth
//@desc    Authenticate user    //description
//@access  Public

// Log in
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 characters').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      });
    }
    //try to check if theer is a user: email and password
    //Get usr by email

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });
      if (!user) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Invalid Credantials',
            },
          ],
        });
      }
      // compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Invalid Credantials',
            },
          ],
        });
      }

      //return the jsonWebToken
      const payload = {
        // id come from save user account
        id: user.id,
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({
            //also sends the token
            token,
          });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
