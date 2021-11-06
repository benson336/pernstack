const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
//const User = require()

router.post('/', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('pasword','Please enter a password with 6 or more characters').isLength({min:6})
],
async (req, res) => {
    console.log(req.body);
    /*const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const { name, email, password } = req.body;

    try{
        let user = await User.findOne({email: email});
        if(user){
            res.status(400).json({errors:[{msg: 'User already exists'}]});
        }
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }*/




    res.send('User routes');

});

module.exports = router;