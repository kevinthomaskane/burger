
var connection = require("../config/connection.js")

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ?? WHERE devoured = false";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(tableInput, name, bool, cb) {
      var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?,?)";
      connection.query(queryString, [tableInput, name, bool], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(tableInput, vals, cols, cb) {
      var queryString = "UPDATE ?? SET ?? WHERE ?";
      connection.query(queryString, [tableInput, vals, cols], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
  };
  
  module.exports = orm;