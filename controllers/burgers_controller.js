var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var object = {
      burgers: data
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/new", function(req, res) {
  burger.insert("burgers", req.body.name, req.body.devoured, function(result) {
    res.json({ id: result.insertId });
  });
});

tableInput, vals, cols, cb
router.put("/burgers/:id", function(req, res) {
  var id = req.params.id
    burger.update("burgers", {devoured: true}, {id: id}, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
