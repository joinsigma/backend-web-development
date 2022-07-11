/**
 * Importing lodash
 */
import _ from "lodash";

/**
 * Selection sort max first using Lodash
 * @param {*} inputArr
 */
function selectionSortMaxLodash(inputArr) {
  let n = inputArr.length;
  for (let i = 0; i < n; i++) {
    const maxVal = _.max(inputArr);
    const max = _.findIndex(inputArr, maxVal);
    if (max != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[max];
      inputArr[max] = tmp;
    }
  }
  return inputArr;
}

/**
 * Selection sort min first using Lodash
 * @param {*} inputArr
 */
function selectionSortMinLodash(inputArr) {
  let n = inputArr.length;
  for (let i = 0; i < n; i++) {
    const minVal = _.min(inputArr);
    const min = _.findIndex(inputArr, minVal);
    if (min != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}

/**
 * Using inquirer
 * Create questionnaire
 */
function createBadmintonQuestionnaire() {
  const questions = [
    {
      name: "name",
      message: "What is your name?",
    },
    {
      type: "number",
      name: "age",
      message: "What age did you start playing badminton?",
      default: 6,
    },
    {
      name: "favePlayer",
      message: "Who is your favorite badminton player?",
      default: "Kento Momota",
    },
    {
      type: "list",
      name: "bestMalePlayer",
      message: "Who is the current world Men's No.1 in BWF?",
      choices: ["Kento Momota", "Victor Axelson", "Lee Zi Jia", "Chen Long"],
    },
    {
      type: "list",
      name: "bestFemalePlayer",
      message: "Who is the current world Women's No.1 in BWF?",
      choices: [
        "Tai Tzu-Ying",
        "Chen Yu Fei",
        "Akane Yamaguchi",
        "An Se-young",
      ],
    },
    {
      type: "checkbox",
      name: "favShotToPlay",
      message: "Which is your favorite shot?",
      choices: [
        "Drop Shot",
        "Smash",
        "Serve",
        "Between the leg shot",
        "Backhand slice",
      ],
    },
    {
      type: "editor",
      name: "badmintonStory",
      message:
        "How did you start playing badminton, or why will you start playing tomorrow?",
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.info("Name:", answers.name);
    console.info(`Age: ${answers.age}`);
    console.info("Your favorite player is", answers.favePlayer);
    console.info("However, the best Male player is:", answers.bestMalePlayer);
    console.info("And, the best Female player is:", answers.bestFemalePlayer);
    console.info("You favorite to play is the", answers.favShotToPlay);
    console.info("Your story of starting badminton:", answers.badmintonStory);
  });
}

/**
 * Using inquirer
 */
async function createBadmintonQuestionnaireAsync() {
  const questions = [
    {
      name: "name",
      message: "What is your name?",
    },
    {
      type: "number",
      name: "age",
      message: "What age did you start playing badminton?",
      default: 6,
    },
    {
      name: "favePlayer",
      message: "Who is your favorite badminton player?",
      default: "Kento Momota",
    },
    {
      type: "list",
      name: "bestMalePlayer",
      message: "Who is the current world Men's No.1 in BWF?",
      choices: ["Kento Momota", "Victor Axelson", "Lee Zi Jia", "Chen Long"],
    },
    {
      type: "list",
      name: "bestFemalePlayer",
      message: "Who is the current world Women's No.1 in BWF?",
      choices: [
        "Tai Tzu-Ying",
        "Chen Yu Fei",
        "Akane Yamaguchi",
        "An Se-young",
      ],
    },
    {
      type: "checkbox",
      name: "favShotToPlay",
      message: "Which is your favorite shot?",
      choices: [
        "Drop Shot",
        "Smash",
        "Serve",
        "Between the leg shot",
        "Backhand slice",
      ],
    },
    {
      type: "editor",
      name: "badmintonStory",
      message:
        "How did you start playing badminton, or why will you start playing tomorrow?",
    },
  ];
  const answers = await inquirer.prompt(questions);
  console.info("Name:", answers.name);
  console.info(`Age: ${answers.age}`);
  console.info("Your favorite player is", answers.favePlayer);
  console.info("However, the best Male player is:", answers.bestMalePlayer);
  console.info("And, the best Female player is:", answers.bestFemalePlayer);
  console.info("You favorite to play is the", answers.favShotToPlay);
  console.info("Your story of starting badminton:", answers.badmintonStory);
}
