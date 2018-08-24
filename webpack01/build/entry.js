var path = require("path");
var fs = require("fs");

module.exports =(()=> {
    var workPath = path.resolve(__dirname, "/entry");
    console.log(workPath);
})();