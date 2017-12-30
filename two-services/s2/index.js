const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const PORT = 8002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// All responses are json

app.get('/', (req, res) => {
  axios.get('http://s1:8001')
    .then((resp) => {
      console.log(resp.data)
      res.json({
        info: resp.data,
      });
    })
    .catch((err) => {
      console.log(err)
      res.json({
        error: err,
      });
    })
});

app.get('*', (req, res) => {
  res.status(404).send('Unknown route');
});

app.listen(PORT, () => {
  console.log('S2 started on port ' + PORT);
});

