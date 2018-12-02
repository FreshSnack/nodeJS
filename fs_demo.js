const fs = require("fs")
fs.readFile("./package.json",function (err,data) {
    console.log(data.toString())
})