var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insert: function(tableInput, name, cb) {
    orm.insertOne("burgers", name, function(res) {
      cb(res);
    });
  },

  update: function(tableInput, vals, cols, cb) {
    orm.updateOne("burgers", vals, cols, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;