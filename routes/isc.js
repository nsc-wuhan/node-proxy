var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/login", function (req, res, next) {
  console.log("query", req.query);
  const url = req.query.service + "?ticket=admin";
  res.redirect(url);
});

module.exports = router;
