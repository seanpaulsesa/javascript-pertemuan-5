const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const DATA_FILE = './data.json';

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
  