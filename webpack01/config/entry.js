var path = require("path");
var fs = require("fs");

var fileNameList = [];

function findFile(path) {
    console.log("path: " + path);
    var files = fs.readdir(path, function(res) {
        console.log(res);
    });
}

module.exports =(()=> {

    console.log(__dirname);
    var entryPath = path.resolve(__dirname, "entry");
    console.log("entryPath: " + entryPath);
    findFile(entryPath);

})();