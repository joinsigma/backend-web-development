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
 *  - a,b,c,d
 *  - 1,2,3,4
 *  - 1 | 2 | 3 | 4
 * All these "options" should be sorted.
 *
 * When sorting, print out the partially sorted list on every loop.
 * After the sorting is done, print out how long the sorting algorithm took for that list. And the print the `getTerminalOptions` again.
 */
import inquirer from "inquirer";
import _ from "lodash";

const getQuestions = async (question, type) => {
  const answer = await inquirer.prompt([
    {
      type: type,
      name: "data",
      message: question,
    },
  ]);
  return answer.data;
};

const parseArray = (arrayString) => {
  if (arrayString.includes(";")) {
    console.log("ERROR IN INPUT, MORE THAN 1 SEPARATOR INCLUDED.");
    return null;
  }
  const newArray = [];
  for (const i of arrayString.split(",")) {
    newArray.push(+i.trim());
  }
  return newArray;
};

function insertionSort(inputArr) {
  const clone = _.cloneDeep(inputArr);
  let n = inputArr.length;
  let swaps = 0;
  console.log(`Sorting [${inputArr}] using Insertion Sort`);
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    if (inputArr[j + 1] !== current) {
      swaps += 1;
    }
    inputArr[j + 1] = current;
    console.log(inputArr);
  }
  console.log(`Sorted the initial array [${clone}] in ${swaps} moves`);
  return inputArr;
}

function bubbleSort(inputArr) {
  const clone = _.cloneDeep(inputArr);
  let n = inputArr.length;
  let swaps = 0;

  console.log(`Sorting [${inputArr}] using Bubble Sort`);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
        swaps += 1;
        console.log(inputArr);
      }
    }
  }
  console.log(`Sorted the initial array [${clone}] in ${swaps} moves`);
  return inputArr;
}

const mergeSort = (inputArr) => {
  const clone = _.cloneDeep(inputArr);

  console.log(`Sorting [${inputArr}] using Merge Sort`);
  const sortedArr = mergeSortRecurse(inputArr);
  console.log(`Sorted the initial array [${clone}]`);

  return sortedArr;
};

const mergeSortRecurse = (inputArr) => {
  let n = inputArr.length;
  let left = [];
  let right = [];
  let sortedArr;
  if (n <= 1) {
    return inputArr;
  }
  let mid = Math.floor(n / 2);

  for (let i = 0; i < mid; i++) {
    left.push(inputArr[i]);
  }
  for (let j = mid; j < n; j++) {
    right.push(inputArr[j]);
  }
  
  let leftValue = mergeSortRecurse(left);
  let rightValue = mergeSortRecurse(right);

  console.log(`Left Value: ${leftValue}, Right Value: ${rightValue}`)

  if (leftValue <= rightValue) {
    sortedArr = merge(leftValue, rightValue);
  } else {
    sortedArr = merge(rightValue, leftValue);
  }
  console.log(`Sorted part: ${sortedArr}`)
  return sortedArr;
};

const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (left.length > i && right.length > j) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

function selectionSort(inputArr) {
  let n = inputArr.length;
  const clone = _.cloneDeep(inputArr);
  let swaps = 0;
  console.log(`Sorting [${inputArr}] using Selection Sort`);
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
      swaps += 1;
      console.log(inputArr);
    }
  }
  console.log(`Sorted the initial array [${clone}] in ${swaps} moves`);
  return inputArr;
}

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
    option = await getTerminalOptions();
    let arrayPreSplit = null;
    let parsedArray = null;

    arrayPreSplit = await getQuestions("Array to Sort:");
    parsedArray = parseArray(arrayPreSplit);
    switch (option) {
      case 1:
        if (parsedArray) {
          insertionSort(parsedArray);
        }
        break;
      case 2:
        if (parsedArray) {
          bubbleSort(parsedArray);
        }
        break;
      case 3:
        if (parsedArray) {
          selectionSort(parsedArray);
        }
        break;
      case 4:
        if (parsedArray) {
          mergeSort(parsedArray);
        }
        break;
      case 0:
        break;
    }
  } while (option !== 0);
}

await main();
