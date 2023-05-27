const fs = require("fs");
console.log("1");
const res = fs.readFileSync("text.txt");
console.log("File: "+res);
console.log("2");