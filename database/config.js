var mysql = require('mysql');

var connection = mysql.createConnection({
  // host: "localhost",
  host: "35.187.249.84",
  user: "root",
  password: "root",
  database: "foxlearn"
});

connection.connect(function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Connected!");
    });

module.exports = connection;
