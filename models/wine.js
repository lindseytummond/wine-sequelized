module.exports = function (sequelize, DataTypes) {
  var Wine = sequelize.define("Wine", {
      name: DataTypes.STRING,
      taste: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  }, {
          timestamps: false,
      });
  return Wine;
};


// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var wine = {
//   all: function(cb) {
//     orm.all("wines", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("wines", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("wines", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   // delete: function(condition, cb) {
//   //   orm.delete("wine", condition, function(res) {
//   //     cb(res);
//   //   });
//   // }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = wine;
