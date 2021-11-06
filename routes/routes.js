const express = require('express');
const router = express.Router();
const dbController = require('../database/controller');
const client = require('../database/db');
const { check, validationResult } = require('express-validator');

router.post('/signup', async (req, res) => {
    //console.log(req.body);
    //res.send('User routes in controller.js');
    try{
        const { description } = req.body;
        const newTodo = await client.query("INSERT INTO todo (description) VALUES ($1)", 
        [description]);
        res.json(newTodo);
    } catch(err) {
        console.error(err.message);
    }

});

//router.route('/signup').post(dbController.signUp);  

module.exports = router;