// import fs from "fs";
// import chalk from "chalk";

// console.log(chalk.blue("hello world"));

// const thenable = {
//   then: function (onFulfilled) {
//     setTimeout(() => onFulfilled(42, 1000));
//   },
// };
// async function useThenable() {
//   await thenable;
//   console.log("Hi there");
// }

// useThenable();

// const Promise = {
//   then: function (onFulfilled) {
//     setTimeout(() => onFulfilled(42, 1000));
//   },
// };

// async function usePromise() {
//   await Promise;
//   console.log("Hello world");
// }
// usePromise();

// function main(fileName) {
//   fs.readFile(fileName, "utf-8", function (err, data) {
//     let total = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] === " ") {
//         total++;
//       }
//     }

//     console.log(total);
//   });
// }

// main("a.txt");

//sudo vi /etc/hosts---- Domain name and IP
