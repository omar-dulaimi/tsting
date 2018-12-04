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

app.listen(port, () => console.log(`Listening on port ${port}`));