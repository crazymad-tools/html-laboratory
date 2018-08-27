var path = require("path");
var fs = require("fs");

var entryFiles = [];

function loadDir(filedir) {
    console.log("fileDir: " + filedir);
    var files = fs.readdirSync(filedir);
    for (var i = 0, len = files.length; i < len; i++) {
        console.log(files[i]);
    }
}

module.exports =((filedir)=> {
    loadDir(filedir);
    return entryFiles;
});