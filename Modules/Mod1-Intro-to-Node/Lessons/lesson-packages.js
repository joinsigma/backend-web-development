/**
 * Using Lodash
 *  - What is Lodash?
 *    A modern JavaScript utility library delivering modularity, performance & extras.
 *    https://lodash.com
 *  - Why people use it?
 *    It's a utility library full of functions that make it easier to manipulate arrays, objects and strings efficiently.
 *  - Documentation
 *    https://lodash.com/docs/4.17.15
 */

// Default node importing method
// const _ = require("lodash");

// ES importing method
import _ from "lodash";

console.log(_.chunk([1, 2, 3, 4], 1));

import inquirer from "inquirer";
/**
 * Using Inquirer.js
 */
let option = -1;

const answer = await inquirer.prompt([
  {
    type: "number",
    name: "option",
    message: "What is your choice?",
  },
]);
console.log(a.option);
