const fs = require("fs");
console.log("starting the process");
const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");
console.log(first, second);

fs.writeFileSync(
  "./content/result-sync.txt",
  `Here is the resukt : ${first}, ${second}`
);
console.log("done with process");
console.log("moving on to the next process");
