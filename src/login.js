var { MongoClient } = require("mongodb");
var found = null;
url = "mongodb://localhost:27017/database";
function checkuser(user, pass, collection) {
  console.log("check user 1");
  function find(user, pass, collection) {
    collection
      .find({ username: user, password: pass })
      .toArray((err, result) => {
        if (err) {
          console.log("error occured while searching");
        } else {
          return result;
        }
      });
  }
}

function checkdatabase(username, password, url) {
  MongoClient.connect(url, function (err, client) {
    if (!err) {
      db = client.db("database");
      console.log("Connected to database");
      console.log("Checking if user exists");
      try {
        console.log("check database 1");
        collection = db.collection("users");
        found = checkuser(username, password, collection);
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

//url is "mongodb://localhost:27017/"
//databse name is database
//collection name is users
//typical doc is of the form
//{username : string,password:string, email:string}

//login page requires query of the form {username:username , password:passwor//in router.post()

//the req.body.username is the username obtained from the login page
//similarly for password

//use those to make the query

//redirect to main page only if user found
