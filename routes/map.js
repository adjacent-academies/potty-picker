var express = require("express");
var router = express.Router();

let urls = require("../database/urls.json");
/* GET map page. */
router.get("/", function(req, res, next) {
  res.render("map");
});
router.get("/:city", (req, res) => {
  let city = req.params.city;
  res.render("map", { mapUrl: urls[city] });
});

module.exports = router;
