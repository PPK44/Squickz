const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

const model = require('./model/model.js');
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

app.get("/getHighScores", (req, res) => {
  console.log(req.query.username + "hi")
  model.Highscore.find({user: req.query.username}).then(function(list){
    if(list.length > 0){
      res.send(list);
    }else{
      console.log("ERROR! no results on that data")
    }
  });
})

app.get("/getEasyHighScores", (req, res) => {
  console.log(req.query.username + "hi")
  model.Highscore.find({level: "Easy"}).then(function(list){
    if(list.length > 0){
      res.send(list);
    }else{
      console.log("ERROR! no results on that data")
    }
  });
})

app.get("/getMediumHighScores", (req, res) => {
  console.log(req.query.username + "hi")
  model.Highscore.find({level: "Medium"}).then(function(list){
    if(list.length > 0){
      res.send(list);
    }else{
      console.log("ERROR! no results on that data")
    }
  });
})

app.get("/getHardHighScores", (req, res) => {
  console.log(req.query.username + "hi")
  model.Highscore.find({level: "Hard"}).then(function(list){
    if(list.length > 0){
      res.send(list);
    }else{
      console.log("ERROR! no results on that data")
    }
  });
})

app.get("/getHellHighScores", (req, res) => {
  console.log(req.query.username + "hi")
  model.Highscore.find({level: "Hell"}).then(function(list){
    if(list.length > 0){
      res.send(list);
    }else{
      console.log("ERROR! no results on that data")
    }
  });
})

app.post("/registerUser", (req, res) => {
  model.User.create({user: req.body.userName, email: req.body.email, password: req.body.passwd}, function(err){
    if (err) {
      throw err;
    }else{
      console.log("inserted successfully");
      res.send(JSON.stringify({userName: req.body.userName}));
    }
  });
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});