var { MongoClient } = require("mongodb");
var found = null;
url = "mongodb://localhost:27017/database";
async function checkuser(user, pass, collection) {
  console.log("check user 1");
  async function find(user, pass, collection) {
    return new Promise(function (resolve, reject) {
      collection
        .find({ username: user, password: pass })
        .toArray((err, result) => {
          if (err) {
            console.log("error occured while searching");
          } else {
            console.log(result);
            if (result.length > 0) {
              resolve(1);
            } else {
              reject(0);
            }
          }
        });
    });
  }
  var found = await find(user, pass, collection);
  console.log("check user 2");
  console.log(found + " from checkuser");

  return found;
}

function checkdatabase(username, password, url) {
  MongoClient.connect(url, async function (err, client) {
    if (!err) {
      db = client.db("database");
      console.log("Connected to database");
      console.log("Checking if user exists");
      try {
        console.log("check database 1");
        collection = db.collection("users");
        found = await checkuser(username, password, collection);
        console.log("check base 2");
        console.log(found);
        if (found == 1) {
          console.log("user found");
          return found;
        } else {
          console.log("user not found");
          return found;
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
