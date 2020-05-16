var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   wine.all(function(data) {
//     var hbsObject = {
//       wines: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// get route - all wines
router.get("/", function (req, res) {
  // send us to the next get function instead.
  res.redirect("/wines");
});

// get route, edited to match sequelize
router.get("/wines", function (req, res) {
  // replace old function with sequelize function
  db.Wine.findAll()
    .then(function (dbWine) {
      // console.log(dbWine);
      var hbsObject = {wines: dbWine};
      console.log(hbsObject.wines[0].name)
      res.render("index", hbsObject);

    });
});


// router.post("/api/wines", function(req, res) {
//   wine.create([
//     "name", "taste"
//   ], [
//     req.body.name, req.body.taste
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// post route for sequelize
router.post("/wines/create", function (req, res) {
  // edit create for new wine
  db.Wine.create({
    wine_name: req.body.wine_name,
  })
    .then(function (dbWine) {
      console.log(dbWine);
      // redirect
      res.redirect("/");
    });
});


// // router.put("/api/wines/:id", function(req, res) {
// //   var condition = "id = " + req.params.id;

// //   console.log("condition", condition);

// //   wine.update({
// //     taste: req.body.taste
// //   }, condition, function(result) {
// //     if (result.changedRows == 0) {
// //       // If no rows were changed, then the ID must not exist, so 404
// //       return res.status(404).end();
// //     } else {
// //       res.status(200).end();
// //     }
// //   });
// // });

// put route for sequelize
router.put("/wines/update/:id", function (req, res) {
  // update one of the wines
  db.Wine.update({
    taste: true
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function (dbWine) {
    res.json("/");
  });
});

// // router.delete("/api/wines/:id", function(req, res) {
// //   var condition = "id = " + req.params.id;

// //   wine.delete(condition, function(result) {
// //     if (result.affectedRows == 0) {
// //       // If no rows were changed, then the ID must not exist, so 404
// //       return res.status(404).end();
// //     } else {
// //       res.status(200).end();
// //     }
// //   });
// // });

// Export routes for server.js to use.
module.exports = router;
