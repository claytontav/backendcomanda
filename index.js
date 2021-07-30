const express = require('express'),
  app = express(),
  mysql = require('mysql'),
  cors = require('cors'),
  bodyParser = require('body-parser');


db = mysql.createConnection({
    host: '179.188.16.162',
    user: 'pediudelivery',
    password: 'Junior#1803@Iz',
    database: 'pediudelivery'
})

setInterval(function () {
  db.query('SELECT 1');
}, 5000);

var server = {
  port: 3300
};

const usersRouter = require('./routes/users');

app.use(cors())
app.use(bodyParser.json());

app.use('/', usersRouter);

app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));