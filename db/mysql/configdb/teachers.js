var mysql = require('mysql');

var db = require('../conn');

var data = require('./admin.data.js');



var sqlQuery = ''
    + 'CREATE TABLE IF NOT EXISTS teachers('
    + 'id INT NOT NULL AUTO_INCREMENT, '
    + 'PRIMARY KEY(id), '
    + 'first_name VARCHAR(30) NOT NULL, '
    + 'middle_name VARCHAR(40) NOT NULL, '
    + 'last_name VARCHAR(30) NOT NULL, '
    + 'data_of_birth DATE NULL DEFAULT NULL, '
    + 'Gender ENUM("male", "female") NOT NULL DEFAULT "male", '
    + 'date_of_employment, '
    + 'phone_number INTEGER(10) NOT NULL'
    + ')';


module.exports = {
    createAdminTable: function () {
        db.query('USE sql7267836', function (err) {
            if (err) {
                console.log("Cannot Use Database: sql7267836");
                console.log(err);
            } else {
                db.query(sqlQuery, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Tabe Created: admin");
                        console.log(result);
                    }
                })
            }
        });
    }
}

