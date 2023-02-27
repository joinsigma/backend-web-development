/**
 * Create a terminal program for testing out sorting algorithms
 * Sorting algorithms that you MUST test
 *  - Insertion sort
 *  - Bubble sort
 *  - Selection sort
 *  - Merge sort
 *
 * Use inquirer to trigger the questions
 * You should use Lodash in ALL of your sorting algorithms.
 *
 * Once you trigger, the programme, using `node index.js`
 * Print out the `getTerminalOptions`, and once you select a sorting algo.
 * Trigger a question to enter a list as such:
 *  - Valid separators = [" ", ",", ";", "|"]
 *  - 1, 2, 3, 4
 *  - a, b, c, d
 *  - 1; 2; 3; 4
 *  - a,b,c,d
 *  - 1,2,3,4
 *  - 1 | 2 | 3 | 4
 *  - 1 2 3 4
 * All these "list" should be sorted.
 * if the list includes more than 1 separator, i.e.
 *  - 1,;3,4,5
 *  - 1;3,2;5
 * It should console.log an error, and then prompt the user to start from the beginning.
 *
 * When sorting,
 *  - Should print out the initial input list at the start.
 *  - Print out the partially sorted list on every "sorting" move.
 *  - After the sorting is done, print out how many sorting moves the sorting algorithm took to sort the list.  
 *  - Print the `getTerminalOptions` again.
 */
import inquirer from "inquirer";
import _ from "lodash";

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
  do {
    option = getTerminalOptions();
  } while (option !== 0);
}

await main();
