var url = require("url")
var s = "http://localhost:8888/start?foo=bar&hello=world"
console.log(url.parse(s, true).query["foo"])
console.log(url.parse(s))

var urlObj = {
    protocol:"http:",
    host:"127.0.0.1",
    port:"8080",
    query:"name=Tom"
}
console.log(url.format(urlObj))