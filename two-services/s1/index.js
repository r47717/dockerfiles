const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const PORT = 8001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// All responses are json

app.get('/', (req, res) => {
  res.json({
    info: 's1 is online',
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Unknown route');
});

app.listen(PORT, () => {
  console.log('S1 started on port ' + PORT);
});

