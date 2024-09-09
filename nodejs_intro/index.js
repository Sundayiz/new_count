const fileSystem = require("fs");
// //Sychronous file read
// const data = fileSystem.readFileSync("./input.txt", { encoding: "utf8" });
// console.log(data);
// console.log("i waited for the synchronous file read to complete");

//asynchronous file read
fileSystem.readFile("./input.txt", { encoding: "utf8" }, (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});
console.log("i did not wait for the asynchronous file read to complete");
// Compare this snippet from nodejs_intro/index.js:
