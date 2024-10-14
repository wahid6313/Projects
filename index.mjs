import fs from "fs";
import chalk from "chalk";

console.log(chalk.blue("hello world"));

// const thenable = {
//   then: function (onFulfilled) {
//     setTimeout(() => onFulfilled(42, 1000));
//   },
// };
// async function main() {
//   await thenable;
//   console.log("Hi there");
// }

// main();

// const Promise = {
//   then: function (onFulfilled) {
//     setTimeout(() => onFulfilled(42, 1000));
//   },
// };

// async function name() {
//   await Promise;
//   console.log("Hello world");
// }
// name();

function main(fileName) {
  fs.readFile(fileName, "utf-8", function (err, data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === " ") {
        total++;
      }
    }

    console.log(total);
  });
}

main("a.txt");
