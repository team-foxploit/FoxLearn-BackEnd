var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
});

con.connect(function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log("Connected!");
  let sql = `select * from users.student`;
  con.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
      return console.log(results);    
  });
  con.end();
});

module.exports = con;