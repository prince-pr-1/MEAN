let fs = require("fs");
let fileName = "abc.txt";
let content = "Hello world\n";

function writeFiles() {
  fs.writeFile(fileName, content, function (err) {
    if (err) {
      console.log("Something went wrong", err);
    } else {
      console.log("file writed");
      //Calling the readfiles() here to handle multi async
      readFiles();
    }
  });
}

function readFiles() {
  fs.readFile(fileName, function (err, fileData) {
    if (err) console.log("Something went wrong!", err);
    if (err.code == "ENOENT") console.log("\n== No file at path ==");
    else console.log(fileData.toString());
  });
}

function appendFiles() {
  fs.appendFile(fileName, content, function (err) {
    if (err) console.log("Something went wrong", err);
    else console.log("Data added");
  });
}
