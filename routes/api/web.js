var express = require("express");
const { route } = require("../api");
var router = express.Router();
var dayjs = require("dayjs");
router.get("/**/*", function (req, res, next) {
  console.log("req.path", req.path);
  if (req.path.indexOf("ppa") !== -1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res.json({ dateTime: "2021-01-03 18:11:32" }));
      }, 0);
    });
  }
  return res.json({ dateTime: dayjs().format("YYYY-MM-DD HH:mm:ss") });
});

module.exports = router;
