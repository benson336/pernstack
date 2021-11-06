const client = require('./db');
//const db = require('./db');

module.exports = {
    signUp: async (req, res) => {
        //console.log(req.body);
        //res.send('User routes in controller.js');
        try{
            const { description } = req.body;
            //console.log(req.body.description);
            const newTodo = await client.query("INSERT INTO todo (description) VALUES($1)", 
            [description]);
            res.json(newTodo);
        } catch(err) {
            console.error(err.message);
        }
}
}