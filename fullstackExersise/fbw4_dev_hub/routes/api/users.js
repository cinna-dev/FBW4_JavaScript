const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const {
    check,
    validationResult
} = require('express-validator')

const User = require('../../models/Users')
//const Users = require('../../models/Users')

//@route  POST api/users
//@desc  Test route     //description 
//@access  public

//////////////////Sign up////////////////////
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 characters').isLength({
        min: 6
    })
], async (req, res) => {
    const errors = validationResult(req)
    //if (@errors.esEmpty()) same as if(errors.length)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        })
    }
    const {
        name,
        email,
        password
    } = req.body
    //confirm if the user exist: try to get user by the email
    try {
        let user = await User.findOne({
            email
        })
        // if the user exist
        if (user) {
            return res.status(400).json({
                errors: [{
                    msg: 'user already exists'
                }]
            })
        }
        //get user gravatar
        const avatar = gravatar.url('email', {
            s: '200', //decides the default size
            r: 'pg', //ew can't have any naked people of anything
            d: 'mm' //it returns a default image which is like a user icon
        })

        user = new User({
            name,
            email,
            avatar,
            password
        })
        //Encrypt th password
        console.log(bcrypt);
        const salt = await bcrypt.genSalt(10) // to do the hashing with
        user.password = await bcrypt.hash(password, salt)


        await user.save()
        //Return the jsonwebtoken
        const payload = {
            user: {
                id: user.id //_id : mongoose uses an abstraction  -- no need for the '_'
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000
        }, (error, token) => {
            if (error) throw error;
            res.json({ //also sends the token
                token
            });
        });
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }


    // res.send(user)
})

module.exports = router;