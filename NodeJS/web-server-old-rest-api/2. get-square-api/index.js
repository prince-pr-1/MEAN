// MY METHOD - chatGPT
/*
 let http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    if (req.url.includes("/square")) {
      let queryObj = url.parse(req.url, true).query;
      let value = queryObj.num;
      let result = value * value;
      res.write(`Square of ${value} is : ${result}`);
      res.end();
    }
  })
  .listen(7777);
 */

// HIS METHOD

let http = require("http");

http
  .createServer(function (req, res) {
    if (req.url.includes("/square")) {
      let result = 0;
      let arr = req.url.split("=");
      let numString = arr[1];
      let num = parseInt(numString);
      result = num * num;
      res.write(`Square is ${result}`);
      res.end();
    }
  })
  .listen(7777);