'use strict'

const express = require('express');

const api = require('api.js');

const app = express();

app.use(api);

app.use(express.static('./pages'));

app.listen(8080);
