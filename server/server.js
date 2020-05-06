'use strict'
//simple server
const express = require('express');
const app = express();

app.use('/', require('./api.js'));

//hosting webpages
app.use(express.static('./pages'));
app.use(express.static('./scripts'));

app.listen(8080, (err) => {
  if(err) console.error('Error Starting Server', err);
  else console.log('Successful Server Start');
});
