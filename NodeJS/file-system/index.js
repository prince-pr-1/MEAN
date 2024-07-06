let fs = require("fs");
let fileName = "abc.txt";
let NewFileName = "abcd.txt";
let content = "Hello world";
let newContent = "New Text\n";

// Callback method 1

/* console.log("Started");
fs.writeFile(fileName, content, function() {
    console.log("File writed");
});
console.log("Ended"); */

// Callback method 2

// console.log("Started");
// fs.writeFile(fileName, content, afterSave);
// console.log("Ended");

// function afterSave() {
//     console.log("File writed successfully!");
// }

console.log("Start");
writeFiles();
console.log("End");

function writeFiles() {
  fs.writeFile(fileName, content, function (err) {
    if (err) console.log("Something went wrong", err);
    else console.log("file writed");
  });
}

function readFiles() {
  fs.readFile(fileName, function (err, fileData) {
    if (err) console.log("Something went wrong!", err);
    if (err.code == "ENOENT") console.log("\n== No file at path ==");
    else console.log(fileData.toString());
  });
}

// function openFiles() {
//     fs.open( filename, flags, mode, callback);
// }

function appendFiles() {
  fs.appendFile(fileName, newContent, function (err) {
    if (err) console.log("Something went wrong", err);
    else console.log("Data added");
  });
}

function deleteFile() {
  fs.unlink(fileName, function (err) {
    if (err) console.log("Something went wrong", err);
    else console.log("File deleted");
  });
}

function renameFile() {
  fs.rename(fileName, NewFileName, function (err) {
    if (err) console.log("Something is wrong", err);
    else console.log("File name changed");
  });
}
