var mysql = require('mysql');

var connection = mysql.createConnection({
  // host: "localhost",
  host: "us-cdbr-iron-east-03.cleardb.net",
  user: "b43b1035c85262",
  password: "77ebd115",
  database: "heroku_959b285b69c3527"
});

connection.connect(function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Connected!");
    });

module.exports = connection;
// mysql://b43b1035c85262:77ebd115@us-cdbr-iron-east-03.cleardb.net/heroku_959b285b69c3527?reconnect=true
