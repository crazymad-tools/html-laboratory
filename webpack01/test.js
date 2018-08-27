var path = require("path");
var dd = require("./config/entry.js");

console.log(dd(path.resolve(__dirname, "src")));

