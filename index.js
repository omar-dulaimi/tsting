const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

const apis = require('./apis/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(
    '<h1>This is Express Server Page</h1>\n'
    + '<h2>Go To:</h2>'
    + '<a href="http://localhost:3000/">http://localhost:3000/</a>'
  );
});

app.get('/GetTest1', (req, res) => {
  res.send({ express: 'Hello From Express /GetTest1' });
});

app.get('/GetTest2', (req, res) => {
  res.send({ express: 'Hello From Express /GetTest2' });
});

app.post('/PostTest1', (req, res) => {
  console.log(req.body);
  res.send(
    { express: `Express Responde to POST request. This is your post: ${req.body.post}` }
  );
});

//Get a number fact from API and send it back to client
app.get('/numberfact', (req, res) => {
  apis.getNumberFact((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ fact: data });
    }
  });
});


// app.post('/user', function (req, res) {
//   let email = req.body.email;

//   if (email === 'a@a.com') {
//     res.send('admin');
//   } else if (email === 'b@b.com') {
//     res.send('teacher');
//   } else if (email === 'c@c.com') {
//     res.send('parent');
//   } else {
//     res.send('no such user!');
//   }
// });

var queryuserid = require('./db/mysql/query/queryuserid.js');
app.post('/S_signin', (req, res) => {
  console.log(req.body);
  queryuserid.selectuseremail(req.body.inputEmail, function (err, sqlResult) {
    if (err) {
      console.log('if (err): NotWorking ', err);
    } else {
      console.log(sqlResult)
      if (sqlResult === undefined) {
        res.end(JSON.stringify({canLog: false}));
      } else {
        console.log("else: sqlResult ", sqlResult.email);
        if (req.body.inputPassword === sqlResult.password) {
          res.end(JSON.stringify({canLog: true}));
        } else {
          res.end(JSON.stringify({canLog: false}));
        }
      }
      
    }
  });
});




const SubServer = require('./server/server.js');

SubServer.runAll();

app.listen(port, () => console.log(`Listening on port ${port}`));