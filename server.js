
var express = require("express");
var bodyParser = require("body-parser");



var connect = require("./config/connection.js")
var orm = require("./config/orm.js");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.use('/', express.static('public'));

// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers", function(err, data) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       res.render("index", { burgers: data });
//     });
//   });


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });