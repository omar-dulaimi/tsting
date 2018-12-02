var mysql = require('mysql');

var db = require('../conn');

var data = require('./parents.data.js');






var sqlQuery = ''
              + 'CREATE TABLE IF NOT EXISTS parents('
              + 'id INT NOT NULL AUTO_INCREMENT, '
              + 'PRIMARY KEY(id), '
              + 'first_name VARCHAR(20), '
              + 'last_name VARCHAR(20), '
              + 'phoneNum INTEGER NOT NULL'
              +  ')';

module.exports = {
  createTable: function() {
        db.query('USE sql7267836', function (err) {
            if (err) {
              console.log("Cannot Use Database: sql7267836");
              console.log(err);
            } else {
              db.query(sqlQuery, function(err, result){
                if (err) {
                  console.log(err);
                } else {
                  console.log("Table Created: parents");
                  console.log(result);
                }
              })
            }
        });
    }
 }