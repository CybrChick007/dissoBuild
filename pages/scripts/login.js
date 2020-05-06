'use strict'

let attempt = 3; //three attempts before system locks
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('loginButton');

function validateLogin(){
  let userAttempt = username.value;
  let passwordAttempt = password.value;

  if (userAttempt == "username" && passwordAttempt == "password"){
    window.location = "../pages/home.html";
    return false;
  }
  else{
    attempt --;
  }

  if (attempt == 0){
    username.disabled = true;
    password.disabled = true;
    submit.disabled = true;
    return false;
  }
}
