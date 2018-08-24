var path = require("path");
var fs = require("fs");

var fileNameList = [];

function findFile(dirPath) {
    var files = fs.readdirSync(dirPath);

    files.forEach(function(filename, index) {
        var filePath = path.join(dirPath, filename);
        console.log(filePath);
        if (fs.lstatSync(filePath).isDirectory()) {
            findFile(filePath);
        } else {
            fileNameList.push(filename);
        }
    });
}

module.exports =((dirname)=> {

    var entryPath = path.resolve(dirname, "entry");
    console.log("entryPath: " + entryPath);
    findFile(entryPath);
    return fileNameList;

});