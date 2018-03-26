

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    var eaten = [];
    var notEaten = [];
  burger.all(function(data) { 
    for (let i = 0; i < data.length; i++){
        if (data[i].devoured === true){
            eaten.push(data[i]);
        } else {
            notEaten.push(data[i]);
        }
    }
    var object = {
      eaten: eaten,
      notEaten: notEaten
    };
    res.render("index", object);
  });
});

router.post("/new", function(req, res) {
  burger.insert("burgers", req.body.name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res) {
  var id = req.params.id
    burger.update("burgers", {devoured: true}, {id: id}, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
