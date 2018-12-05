var queryuserid = require('./queryuserid.js');
var inputEmail = "a@aa.com";
var inputPassword = "aaa";

queryuserid.selectuseremail(inputEmail, function (err, sqlResult) {
    if (err) {
      console.log('if (err): NotWorking ', err);
    } else {
      console.log("else: inputPassword ", inputPassword);
      console.log("else: password ", sqlResult.password);
      if (inputPassword === sqlResult.password) {
        console.log("if")
          console.log(inputPassword, sqlResult.password)
        //res.end(JSON.stringify({canLog: true}));
      } else {
          console.log("else")
        console.log(inputPassword, sqlResult.password)
        //res.end(JSON.stringify({canLog: false}));
      }
    }
  });

