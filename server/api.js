const express = require('express');
const router = express.Router();

let fs = require("fs");
let browserify = require("browserify");
let babelify = require("babelify");

browserify({ debug: true })
  .transform(babelify)
  .require("./pages/scripts/structure.js", { entry: true })
  .bundle()
  .on("error", function (err) { console.log("Error: " + err.message); })
  .pipe(fs.createWriteStream("bundle.js"));
//

module.exports = router;

// //Validation for login
// let attempt = 3; //three attempts before system locks
// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const submit = document.getElementById('loginButton');
//
// function validateLogin(){
//   let userAttempt = username.value;
//   let passwordAttempt = password.value;
//
//   if (userAttempt == "username" && passwordAttempt == "password"){
//     window.location = "home.html";
//     return false;
//   }
//   else{
//     attempt --;
//   }
//
//   if (attempt == 0){
//     username.disabled = true;
//     password.disabled = true;
//     submit.disabled = true;
//     return false;
//   }
// }
