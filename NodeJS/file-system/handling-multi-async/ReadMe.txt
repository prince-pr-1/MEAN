When executing multiple asynchronous operations there
might be a chance that the operations may not complete
in the program order, which will sometimes cause issues

for instance, we are creating a file using fs.createFile()
and then reading the same file using fs.readFile()

fs.createFile()
fs.readFile()

here even though the execution order is create then read, 
sometimes the creation file may take longer depending 
operation various factors like file size. 

So, to make it error free I am going to put the fs.readFile()
inside the callBack of fs.createFile(). This way, the readFile()
will only be executed after the completion of createFile().

--- THIS IS KNOWN AS CALLBACK HELL ---

ie,

fs.createFile("file.txt", "content", function(err){
    if (err) {
        console.log("Something went wrong!");
    } else {
        console.log("File created!");
        FS.CREATEFILE(....):
    }
});