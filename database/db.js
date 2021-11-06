const Client = require("pg").Client;

const client = new Client({
    user: "postgres",
    password:"benson2588",
    host:"localhost",
    port: 5432,
    database:"pernstack"
});


client.connect(err => {
    if (err) {
      return console.error('Could not connect to Heroku Postgres', err);
    } else {
      console.log('Database connected!');
    }
  });

module.exports = client;