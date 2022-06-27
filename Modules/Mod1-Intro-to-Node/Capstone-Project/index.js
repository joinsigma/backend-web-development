/**
 * Create a terminal program for testing out sorting algorithms
 * Sorting algorithms that you MUST test
 *  - Insertion sort
 *  - Bubble sort
 *  - Selection sort
 *  - Merge sort
 *
 * For an additional challenge, try to write the functions for the sorting algorithms yourself!
 * Use inquirer to trigger the questions
 *
 * Print out the `getTerminalOptions`, and once you select a sorting algo.
 * Trigger a question to enter a list as such:
 *  - 1, 2, 3, 4
 *  - a, b, c, d
 *  - 1; 2; 3; 4
 *  - 1 | 2 | 3 | 4
 * All these "options" should be sorted.
 *
 * When sorting, print out the partially sorted list on every loop.
 * After the sorting is done, print out how long the sorting algorithm took for that list. And the print the `getTerminalOptions` again.
 */
import inquirer from "inquirer";

const getTerminalOptions = async () => {
  const options = {
    "Insertion Sort": 1,
    "Bubble Sort": 2,
    "Selection Sort": 3,
    "Merge Sort": 4,
    Quit: 0,
  };
  const answer = await inquirer.prompt({
    type: "rawlist",
    name: "data",
    message: "Select a sorting algorithm to test: ",
    choices: [
      "Insertion Sort",
      "Bubble Sort",
      "Selection Sort",
      "Merge Sort",
      "Quit",
    ],
  });
  return options[answer.data];
};

async function main() {
  // variable to store the user's option
  let option = -1;
  console.log("Welcome to the sorting Algorithm tester!\n");
  option = getTerminalOptions();
}

await main();
