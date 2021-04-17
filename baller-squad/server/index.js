const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

const model = require('./model/model.js');
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getUsers", (req, res) => {
  console.log(req.query.username)
  model.User.find({user: req.query.username}).then(function(list){
    if(list.length > 0){
      res.send(list);
    }else{
      console.log("ERROR! no results on that data")
    }
  });
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});