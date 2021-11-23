var { MongoClient } = require("mongodb");

url = "mongodb://localhost:27017/database";

function checkuser(user, pass, db) {
  var found = db
    .db("database")
    .collection("users")
    .find({ username: user, password: pass })
    .limit(1).length;
  return found == 1;
}

function checkdatabase(username, password, url) {
  var mcc = MongoClient.connect(url, function (err, db) {
    if (!err) {
      console.log("Connected to database");
      console.log("Checking if user exists");
      try {
        let found = checkuser(username, password, db);
        if (found) {
          console.log("user found");
        } else {
          console.log("user not found");
        }
      } catch (err) {
        console.log("Error occured while searching for user");
        console.log(err);
      }
    } else {
      if (db == null) {
        console.log("database does not exist");
      }
      console.log(err);
      console.log("Unable to connect to database");
    }
  });
}
module.exports.checkuser = checkuser;
module.exports.checkdatabase = checkdatabase;
module.exports.url = url;
