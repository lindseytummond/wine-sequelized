var express = require("express");
var Handlebars = require('handlebars');

var {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
// var bodyParser = require("body-parser");

// var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

var exphbs = require("express-handlebars");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.engine("handlebars", exphbs({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/wines_controller.js");

app.use(routes);

var db = require("./models");

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });

var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});