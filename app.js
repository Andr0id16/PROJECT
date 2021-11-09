var express = require("express");
var path = require("path");
var app = express();
var router = express.Router();
app.use(router);
app.use(express.static(__dirname + "/public"));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
router.get("/Aboutus", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/Aboutus.html"));
});
router.get("/Contactus", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/Contactus.html"));
});
router.get("/leaderboards", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/leaderboards.html"));
});
router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/login.html"));
});
router.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/signup.html"));
});
router.get("/store", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/store.html"));
});
router.get("/tutorial", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/tutorial.html"));
});

app.listen(3000);
