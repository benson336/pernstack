const express = require("express");
const app = express();
const cors = require("cors");//different ports to work together
const client = require("./database/db.js");//database
const router = require('./routes/routes.js');


//middleware
app.use(cors());
//allow to access request.body to get json data
app.use(express.json());

//app.get('/', (req,res) => res.send('Express server running! 5000'));
/*app.post('/todos', (req, res) => {
    try {
        //console.log(req.body);
        const { description } = req.body;
        const newTodo = client.query("INSERT INTO todo (description) VALUES($1)", [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
    console.error(err.message);
}});*/


//Define Route
app.use('/', router);
//app.use('/users', require('./routes/users'));
/*app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));
app.use('/posts', require('./routes/posts'));*/



let port = process.envPORT || 5000;
app.listen(port, () => {
    console.log("Server has started on port 5000");
});

//express express-validator bcryptjs config gravatar jsonwebtoken mongoose request