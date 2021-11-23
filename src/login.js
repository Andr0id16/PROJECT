var { MongoClient } = require("mongodb");

url = "mongodb://localhost:3000/database";

function checkuser(username, password, db) {
  let found = db
    .Collection("users")
    .find({ username: username }, { password: password })
    .limit(1)
    .size();
  return found;
}

function checkdatabase(username, password) {
  MongoClient(url, function (err, db) {
    if (!err) {
      console.log("Connected to database");
      console.log("Checking if user exists");
      let found = checkuser(username, password, db);
      if (found) {
        console.log("user found");
      } else {
        console.log("user not found");
      }
    } else {
      console.log("Unable to connect to database");
    }
  });
}

// document.getElementsById("submit").addEventListener("submit", function (event) {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   console.log("checking");
//   checkdatabase(username, password);
//   event.preventDefault();
// });

module.exports.checkuser = checkuser;
module.exports.checkdatabase = checkdatabase;
module.exports.url = url;
