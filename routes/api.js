var express = require("express");
var router = express.Router();
var formidable = require("formidable");
var fs = require("fs");
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  // );
  res.header("Access-Control-Allow-Headers", "Authorization");
  next();
});
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/logout", function (req, res, next) {
  console.log("run logout");
  res.json({ code: 200, msg: "退出成功" });
});

// 文件上传
router.post("/review/mnthlyMagazineFlow/getUrlByUploadOss", function (
  req,
  res,
  next
) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (error, fields, files) {
    if (error) throw error;
    console.log("parse done", files);
    console.log(files.file.path);

    // 读取文件流并写入到public/test.png
    fs.writeFileSync(
      `public/images/${files.file.name}`,
      fs.readFileSync(files.file.path)
    );
    res.json({
      code: 200,
      data: `http://localhost:3000/images/${files.file.name}`,
    });
    //重定向到结果页
  });
});

// 文件上传
router.post("/uploads", function (req, res, next) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (error, fields, files) {
    if (error) throw error;
    console.log("parse done", files);
    // console.log(files.upfile.path);

    // // 读取文件流并写入到public/test.png
    fs.writeFileSync(
      `public/images/${files.file.name}`,
      fs.readFileSync(files.file.path)
    );
    res.json({
      code: 200,
      data: `http://localhost:3000/images/${files.file.name}`,
    });
    //重定向到结果页
  });
});

// isc登录

module.exports = router;
