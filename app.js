var express = require("express");
var path = require("path");
var app = express();
var router = express.Router();
var bodyparser = require("body-parser");
var { MongoClient } = require("mongodb");
var username;
var session = require("express-session");
var password;
var isloggedin = false;
var loginpage = "/public/login.html";

const { checkdatabase, url, checkuser } = require(__dirname +
  "\\src\\login.js");
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
const { registeruser } = require(__dirname + "\\src\\register.js");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/images", express.static(__dirname + "/images"));
app.use(router);

router.post("/login", function (req, res) {
  if (req.body.username == undefined) {
    loginpage = "/public/login.html";
    res.redirect("/login");
  } else {
    var found;
    username = req.body.username;
    password = req.body.password;

    MongoClient.connect(url, function (err, client) {
      if (err) throw err;
      var db = client.db("database");
      var collection = db.collection("users");
      collection
        .find({ username: username, password: password })
        .toArray((err, re) => {
          if (err) throw err;
          var found = re.length > 0;
          if (found) {
            req.session.isloggedin = true;
            req.session.username = username;
            req.session.password = password;
            req.session.loginpage = "/public/account.html";
            res.redirect("/index");
          } else {
            req.session.isloggedin = false;

            res.redirect("/incorrect_page");
          }
        });
    });
  }
});
router.post("/signup", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var emailaddress = req.body.email;
  try {
    registeruser(username, password, emailaddress);
  } catch (err) {
    console.log(err);
  }
  console.log("Registered......You will be redirected to Home page");
  res.redirect("/login");
});
router.get("", function (req, res) {
  console.log(req.session.isloggedin);
  if (!req.session.isloggedin) {
    req.session.islogged = false;
    req.session.username = undefined;
    req.session.password = undefined;
  }

  if (req.session.isloggedin == true)
    res.sendFile(path.join(__dirname, "/public/index.html"));
  else {
    req.session.isloggedin = false;
    res.redirect("/login");
  }
});
router.get("/index.html", function (req, res) {
  console.log(req.session.isloggedin);
  if (!req.session.isloggedin) {
    req.session.isloggedin = false;
    req.session.username = undefined;
    req.session.password = undefined;
  }

  if (req.session.isloggedin == true)
    res.sendFile(path.join(__dirname, "/public/index.html"));
  else {
    req.session.isloggedin = false;
    res.redirect("/login");
  }
});

router.get("/index", function (req, res) {
  console.log(req.session.isloggedin);
  if (!req.session.isloggedin) {
    req.session.islogged = false;
    req.session.username = undefined;
    req.session.password = undefined;
  }

  if (req.session.isloggedin == true)
    res.sendFile(path.join(__dirname, "/public/index.html"));
  else {
    req.session.isloggedin = false;
    res.redirect("/login");
  }
});
router.get("/", function (req, res) {
  console.log(req.session.isloggedin);
  if (!req.session.isloggedin) {
    req.session.islogged = false;
    req.session.username = undefined;
    req.session.password = undefined;
  }

  if (req.session.isloggedin == true)
    res.sendFile(path.join(__dirname, "/public/index.html"));
  else {
    req.session.isloggedin = false;
    res.redirect("/login");
  }
});
router.get("/Aboutus", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/Aboutus.html"));
});
router.get("/incorrect_page", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/incorrect_page.html"));
});
router.get("/Contactus", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/Contactus.html"));
});
router.get("/leaderboards", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/leaderboards.html"));
});
router.get("/login", function (req, res) {
  if (!req.session.loginpage) {
    req.session.loginpage = "/public/login.html";
  }
  res.sendFile(path.join(__dirname, req.session.loginpage));
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
router.post("/account", function (req, res) {
  req.session.destroy((err) => {
    res.redirect("/login");
  });
});

app.listen(3000);
