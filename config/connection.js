// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("wine_db", "root", "x5y6eLST$", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;


// // Set up MySQL connection.
// var mysql = require("mysql");


// var connection;

// if(process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "x5y6eLST$",
//     database: "wine_db"
//   });
// }

// // // for local testing
// // var connection = mysql.createConnection({
// //   host: "localhost",
// //   port: 3306,
// //   user: "root",
// //   password: "x5y6eLST$",
// //   database: "wine_db"
// // });

// // // for Heroku
// // var connection = mysql.createConnection(process.env.JAWSDB_URL);

// // Make connection.
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;
