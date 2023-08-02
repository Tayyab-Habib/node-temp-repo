//Global Variables are the variables which can be accessed anytwhere in the code
//some of the vraiables are
// __dirname - path to current directory
// __filename - file name
//require - function to use modules(CommonJS)
// module -info about current module (file)
//process - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("helloworld");
}, 1000);
