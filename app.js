var express = require("express");

var path = require("path");
var app = express();
var router = express.Router();
var bodyparser = require("body-parser");
var { MongoClient } = require("mongodb");
const { checkdatabase, url, checkuser } = require(__dirname +
  "\\src\\login.js");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(router);
app.use(express.static(__dirname + "/public"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/images", express.static(__dirname + "/images"));

router.post("/login", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  checkdatabase(username, password, url);
  res.redirect("/index");
});

router.get("/index", function (req, res) {
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
