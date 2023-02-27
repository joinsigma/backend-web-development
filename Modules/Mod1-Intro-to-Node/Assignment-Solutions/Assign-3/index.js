import lodash from "lodash";
import inquirer from "inquirer";

/**
 * Question 1
 * Create an insertion sorting algorithm in ascending order that uses lodash
 */
function insertionSortAsc(unsortedArray) {
  for (let i = 1; i < unsortedArray.length; i++) {
    let temp = unsortedArray[i];
    // find the correct position to insert the current element into the sorted portion of the array.
    let j = lodash.findIndex(unsortedArray.slice(0, i), function (n) {
      return n > temp;
    });
    // no element is found it means that temp is the largest so j is set to i
    if (j === -1) {
      j = i;
    }
    // shift elements to the right as necessary to make room for the current element.
    while (i > j) {
      unsortedArray[i] = unsortedArray[i - 1];
      i--;
    }
    unsortedArray[j] = temp;
  }
  return unsortedArray;
}

// console.log(insertionSortAsc([2, 1, 3, 44, 5, 2, 31, 32, 14, -1, 42]));

/**
 * Question 2
 * Create an insertion sorting algorithm in descending order that uses lodash
 */
function insertionSortDesc(unsortedArray) {
  for (let i = 1; i < unsortedArray.length; i++) {
    let temp = unsortedArray[i];
    let j = lodash.findIndex(unsortedArray.slice(0, i), function (n) {
      return n < temp;
    });
    if (j === -1) {
      j = i;
    }
    while (i > j) {
      unsortedArray[i] = unsortedArray[i - 1];
      i--;
    }
    unsortedArray[j] = temp;
  }
  return unsortedArray;
}

// console.log(insertionSortDesc([2, 1, 3, 44, 5, 2, 31, 32, 14, -1, 42]));

/**
 * Question 3
 * Create a interview questionnaire for backend web develop job using inquirer.js.
 * Be sure to include these *types* of questions
 * Open ended question.
 * A numbered question.
 * A true/false question
 * A checkbox question
 * A multiple choice question.
 * Then finally, display all the questions and answers in the pretty format
 * */
function createQuestionnaire() {
  const questions = [
    {
      name: "name",
      message: "What is your name?",
    },
    {
      type: "number",
      name: "experience",
      message: "How many years of experience do you have?",
      default: 1,
    },
    {
      type: "list",
      name: "job",
      message: "Which job are you applying for?",
      choices: [
        "Backend Web Developer",
        "Frontend Web Developer",
        "Fullstack Web Developer",
      ],
    },
    {
      type: "list",
      name: "expectedSalary",
      message: "What is a your expected salary?",
      choices: ["RM3000 - RM4000", "RM4000 - RM5000", "RM5000+"],
    },
    {
      type: "confirm",
      name: "leadProject",
      message: "Have you previously lead a project before?",
      default: false,
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What languages do you know?",
      choices: ["Java", "JavaScript", "C#", "C++", "C", "Go", "Rust"],
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.info("Name:", answers.name);
    console.info(`Years of Experience: ${answers.experience}`);
    console.info("Job applied:", answers.job);
    console.info("Expected Salary:", answers.expectedSalary);
    console.info("Previously lead a project:", answers.leadProject);
    console.info("Known languages: ", answers.languages);
  });
}
// createQuestionnaire();
