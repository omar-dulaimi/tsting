var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "ghosoun"
});


var creatParents = ''
    + 'CREATE TABLE IF NOT EXISTS parents('
    + 'id INT NOT NULL AUTO_INCREMENT, '
    + 'PRIMARY KEY(id), '
    + 'first_name VARCHAR(20), '
    + 'last_name VARCHAR(20), '
    + 'phoneNum INTEGER NOT NULL'
    + ')';

var sqlInserrt = "insert into parents(first_name, last_name, phoneNum) values ?";
var values = [
    ['Saly', 'Ahamed', '0795432158'],
    ['Sarah', 'Alshak', '0795432158'],
    ['Rasha', 'Hammad', '0795432158'],
    ['Lama', 'Daboos', '0795432158']
    

];

var sqlUpdate = "UPDATE parents SET first_name = 'Zohour' WHERE first_name = 'Rasha'";
var sqlDelete = "DELETE FROM parents WHERE first_name = 'Saly'";

var sqlcreate = {
    createTable: function () {
        db.query('USE ghosoun', function (err) {
            if (err) {
                console.log("Cannot Use Database: ghosoun");
                console.log(err);
            } else {
                db.query(creatParents, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Table Created: parents");
                        console.log(result);
                    }
                })
            }
        });
    },
    selectparents: function () {
        db.query('USE ghosoun', function (err) {
            if (err) {
                console.log("Cannot Use Database: ghosoun");
                console.log(err);
            } else {
                db.query(sqlInserrt,[values], function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Data inserted");
                        console.log(result);
                    }
                })
            }
        });
    },

    Updateparents:function(){
        db.query('USE ghosoun', function (err) {
            if (err) {
                console.log("Cannot Use Database: ghosoun");
                console.log(err);
            } else {
                db.query(sqlUpdate, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Data updated");
                        console.log(result);
                    }
                })
            }
        });
    },
    DeleteParents: function(){
        db.query('USE ghosoun', function (err) {
            if (err) {
                console.log("Cannot Use Database: ghosoun");
                console.log(err);
            } else {
                db.query(sqlDelete, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("done");
                        console.log(result);
                    }
                })
            }
        });
    }
}
// sqlcreate.createTable();
sqlcreate.selectparents();
sqlcreate.Updateparents();
sqlcreate.DeleteParents();




