// ----- MySQL ----

/*var mysql = require('mysql');

// mysql://b43b1035c85262:77ebd115@us-cdbr-iron-east-03.cleardb.net/heroku_959b285b69c3527?reconnect=true
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

*/

// ----- MySQL ----

const mongoose = require('mongoose');
// mongodb://heroku_65j68qcv:8aruocin3bmr0aps9sn5ijm7n6@ds161345.mlab.com:61345/heroku_65j68qcv
// mongoose.connect('mongodb://heroku_65j68qcv:8aruocin3bmr0aps9sn5ijm7n6@ds161345.mlab.com:61345/heroku_65j68qcv', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected");
});

module.exports = db;
