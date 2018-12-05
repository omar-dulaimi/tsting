var mysql = require('mysql');

var db = require('../conn');

module.exports = {
  selectuseremail: function(inputEmail, callback) {
        db.query('USE EduCompassy', function (err) {
            if (err) {
              console.log("Cannot Use Database: EduCompassy");
              console.log(err);
              callback(err, null)
            } else {
              console.log("else - body.inputEmail: ", inputEmail)
              var qu1 = `SELECT * FROM userid WHERE email="${inputEmail}"`;
              var qu2 = `SELECT * FROM userid WHERE email=?`; 
              db.query(qu2, inputEmail, 
                function(err, result){
                  if (err) {
                    console.log('NotWorking', err);

                    callback(err, null)
                  } else {
                    console.log("Result");
                    console.log(result[0]);
                    callback(null, result[0])
                  }
              })
            }
        });
    }
 }