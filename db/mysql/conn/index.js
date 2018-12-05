var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot", 
  database: "EduCompassy"
});

// var conn = mysql.createConnection({
//   host: "sql7.freemysqlhosting.net",
//   user: "sql7267836",
//   password: "DrmuiVhr4d",
//   database: "sql7267836"
// });

module.exports = conn;