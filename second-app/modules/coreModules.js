/* 
Here, let's learn some of the core modules in node.
- core modules can be directly called by require without
giving any path except their name.
*/
const os = require("os");
const fs = require("fs");

function coreModules() {
  console.log("Platform :", os.platform());
  console.log("Platform :", os.arch());
  console.log("Hostname :", os.hostname());
  console.log("UserInfo :", os.userInfo());
  console.log("Machine :", os.machine());
  console.log("Total mem :", os.totalmem());
  console.log("Free memmory :", os.freemem());

  fs.writeFile("forRead.txt", "I wrote it !", (err) => {
    if (err) throw err;
    else console.log("Success fully wrote file");
  });

  fs.readFile("forRead.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Reading file...");
    console.log("Content :", data);
  });
}

module.exports = coreModules;
