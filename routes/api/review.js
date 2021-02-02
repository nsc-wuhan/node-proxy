var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/review/mnthlyMagazineFlow/getUrlByUploadOss", function (
  req,
  res,
  next
) {
  res.send(
    "respond with a resource review/mnthlyMagazineFlow/getUrlByUploadOss"
  );
});

module.exports = router;
