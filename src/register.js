const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/database";

function registeruser(username, password, emailaddress) {
  var userobject = {
    username: username,
    password: password,
    email: emailaddress,
  };
  MongoClient.connect(url, function (err, client) {
    if (!err) {
      console.log("connecting to database");
      try {
        var db = client.db("database");
        collection = db.collection("users");
        collection.insertOne(userobject, function (er, res) {
          if (!er) {
            console.log("Registered Successfully");
          } else {
            console.log("Error occurred while registering in database", er);
          }
        });
      } catch (error) {
        console.log("Error on connecting to database", error);
      }
    } else {
      console.log("could not connect to database", err);
    }
  });
}
module.exports.registeruser = registeruser;
