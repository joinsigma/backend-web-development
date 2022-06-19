/**
 * Create a terminal program for testing out sorting algorithms
 * Sorting algorithms that you MUST test
 *  - Insertion sort
 *  - Bubble sort
 *  - Selection sort
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

const triggerQuestion = async (dataType, question) => {
  const answer = await inquirer.prompt({
    type: dataType,
    name: "data",
    message: question,
  });

  return answer.data;
};

const getTerminalOptions = () => {
  return `
    Welcome to the sorting Algorithm tester

    Select a sorting algorithm to test.
    1. Insertion Sort
    2. Bubble Sort
    3. Selection Sort
    0. Quit
    `;
};

async function main() {
  let option = -1;

  while (option !== 0) {
    console.log(getTerminalOptions());
    option = await triggerQuestion("number", "What is your choice?\n");
    console.log(option);
  }
}

await main();
