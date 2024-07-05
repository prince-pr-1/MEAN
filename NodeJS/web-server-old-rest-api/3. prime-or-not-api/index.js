const http = require("http");
let checkPrime = require("../../Basics/11. primeOrNot");

http
  .createServer(function (req, res) {
    if (req.url.includes("/prime")) {
      let result = "";
      let arr = req.url.split("num=");
      let numString = arr[1];
      let num = parseInt(numString);
      result = checkPrime(num);
      res.write(result);
      res.end();
    }
  })
  .listen(7777);
