const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route  POST api/users
// @desc   Register new user
// @access Public
router.post('/', (req,res) => {
    const { name, email, password, password2 } = req.body;

    // Check for the empty fields 
    if (!name || !email || !password || !password2) {
        res.status(400).json({ msg: 'Please fill all the blanks' });
    }

    // Check if email is used before
    User.findOne({ email })
        .then( user => {
            if(user) return res.status(400).json({ msg: 'Email already exists' });

            // Password must be longer than 6
            if(password.length < 6) return res.status(400).json({ msg: 'Password must be longer than 6 letter'})
        
            // Does passwords match
            if (password !== password2) return res.status(400).json({ msg: 'Passwords do not match' });
            
            const newUser = new User({
                name: name,
                email: email,
                password: password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;  
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }    
                            );
                        })
                })
            });
        })
    .catch(err => {
        console.log(err)
        res.status(400).json({ msg: "Something is wrong"})
    })
});

    
module.exports = router;