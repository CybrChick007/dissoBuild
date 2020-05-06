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
