'use strict'

const fs = require('fs');
// const mysql = require('mysql2/promise');

let filepath = "";



// HTML5 File system API (Javascript and Webkit)
window.webkitRequestFileSystem(window.TEMPORARY, 1024*1024, SaveDatFileBro);


window.webkitRequestFileSystem(window.PERSISTENT , 1024*1024, SaveDatFileBro);


// Permisson request to store permanent files
navigator.webkitPersistentStorage.requestQuota(1024*1024, function() {
  window.webkitRequestFileSystem(window.PERSISTENT , 1024*1024, SaveFile);
})

function SaveFile(localStorage){
  localstorage.root.getFile("info.txt", {create: true}, function(NewFile) {
    Newfile.createWriter(function(Content) {
      let blob = new Blob(["Lorem Ipsum"], {type: "text/plain"});
      Content.write(blob);
    });
  });
}
