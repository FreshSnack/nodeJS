const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
var $ = require('jquery')(window);
// console.log($);
console.log($.ajax);

var s = ["a","b","c"]
console.log($.each);

$.each(s,function (item) {
    console.log(item)
});
