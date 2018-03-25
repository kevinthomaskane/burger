var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function(tableInput, name, bool, cb) {
    orm.insertOne("burgers", name, bool, function(res) {
      cb(res);
    });
  },

  update: function(tableInput, vals, cols, cb) {
    orm.updateOne("burgers", vals, cols, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;