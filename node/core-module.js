const path = require("path")
const fs = require("fs")  // fs = fileSystem
// fs.writeFileSync("custom.txt","Hello World")

let data =  fs.readFileSync("./custom.txt")
console.log(data.toString())

// const path = require("path")
console.log(path.join(path.resolve(),"uploads"))