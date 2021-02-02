var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/signin", function (req, res, next) {
  return res.json({
    code: 200,
    data: {
      additionalInformation: {
        name: "kevin",
        user_id: 111,
        value: "test123token",
      },
      value: "test123token",
    },
  });
});

router.get("/encrypt/rsa", function (req, res, next) {
  console.log("request rsa");
  return res.json({
    publicKey: "aaaaaaaaaaaa",
    publicRandom: "bbbbbb",
  });
});

module.exports = router;
