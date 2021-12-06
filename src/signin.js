let submit = document.getElementById("submit");
let username = document.getElementById("username");
let email = document.getElementById("email");
var password = document.getElementById("password");

var usernameformat = new RegExp(/^[a-zA-Z0-9]{4,15}$/);
var emailformat = new RegExp(
  /^[a-zA-Z0-9\.]{4,30}@[a-zA-Z0-9\.]{4,12}\.(com)|(edu)|(org)$/
);
nav = document.getElementById("nav");
var error_message = [];
submit.addEventListener(
  "click",
  function (e) {
    error_message = [];
    var s = document.querySelectorAll(".x");
    for (var k = 0; k < s.length; k++) {
      s[k].textContent = "";
    }
    generateError();
    console.log(error_message);
    if (error_message.length > 0) {
      for (var i = 0; i < error_message.length; i++) {
        let j = error_message[i];
        var ele = document.getElementById(j);
        var next = ele.nextElementSibling;
        console.log(next);
        next.textContent = "❌";
      }
      e.preventDefault();
      e.stopPropagation();
      error_message = [];
    }
  },
  true
);

function generateError() {
  if (!usernameformat.test(username.value)) {
    error_message.push("username");
  }
  if (!emailformat.test(email.value)) {
    error_message.push("email");
  }
  if (!document.getElementById("password").value)
    error_message.push("password");
  if (
    document.getElementById("password").value !==
    document.getElementById("cpassword").value
  ) {
    error_message.push("cpassword");
  }
}
