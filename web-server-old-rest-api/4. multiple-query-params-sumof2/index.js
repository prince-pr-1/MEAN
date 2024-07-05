const http = require("http");

http
  .createServer(function (req, res) {
    if (req.url.includes("/sum")) {
      let arr1 = req.url.split("n1=");
      let arr2 = arr1[1].split("n2=");
      let n1 = parseInt(arr2[0]);
      let n2 = parseInt(arr2[1]);
      let sum = n1 + n2;
      res.write(`Sum = ${sum}`);
      res.end();
    }
  })
  .listen(7777);
