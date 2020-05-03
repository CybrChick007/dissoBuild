'use strict'
//simple server
const express = require('express');

// const api = require("api.js");

const app = express();
// app.use(api);

//hosting webpages
app.use(express.static('./pages'));

app.listen(8080, (err) => {
  if(err) console.error('Error Starting Server', err);
  else console.log('Successful Server Start');
});
