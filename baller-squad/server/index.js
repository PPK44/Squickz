const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

const model = require('./model/model.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});