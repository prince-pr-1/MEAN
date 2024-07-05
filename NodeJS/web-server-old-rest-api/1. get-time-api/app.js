const http = require("http");

http
  .createServer((req, res) => {
    console.log("Server created", req.url);
    if (req.url == "/") {
      res.write("<h1>Home url</h1>");
      res.end();
    } else if (req.url == "/time") {
      let time = getTime();
      res.write(time);
      res.end();
    } else {
      res.write("<h1>No such url</h1>");
      res.end();
    }
  })
  .listen(7777);

function getTime() {
  let dateObj = new Date(),
  time = dateObj.toLocaleTimeString();
  return time;
}
