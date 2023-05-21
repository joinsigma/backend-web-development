/**
 * Implement this insertion sort algorithm
 * https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm
 *
 * Use the pseudocode and translate it js code
 */
function insertionSort(unsortedList) {
  let n = unsortedList.length;
  for (let i = 1; i < n; i++) {
    let current = unsortedList[i];
    let j = i - 1;
    while (j > -1 && current < unsortedList[j]) {
      unsortedList[j + 1] = unsortedList[j];
      j--;
    }
    unsortedList[j + 1] = current;
  }
  return unsortedList;
}

/**
 *
 * @param {*} inputList
 * @returns list - reversed of ${inputList}
 */
function reverseList(inputList) {
  const reversed = [];
  const n = inputList.length;
  for (let i = n - 1; i >= 0; i--) {
    reversed.push(inputList[i]);
  }
  return reversed;
}

/**
 * Write a module to detect if a number is a prime number.
 * If it's a prime number, print out `Yes, ${possiblePrimeNumber} is a prime number`, and return the Prime number.
 * Else, print out `No, ${possiblePrimeNumber} is not a prime number`,
 * THEN, print out the first prime number before {possiblePrimeNumber}
 * AND, print out the next prime number after {possiblePrimeNumber}
 * Finally, return the first prime number before, and next prime number after {possiblePrimeNumber} as a list;
 */
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function primeNumberDetector(possiblePrimeNumber) {
  console.log(`Is ${possiblePrimeNumber} a prime number?`);
  if (isPrime(possiblePrimeNumber)) {
    console.log(`Yes, ${possiblePrimeNumber} is a prime number`);
    return possiblePrimeNumber;
  }
  console.log(`No, ${possiblePrimeNumber} is not a prime number`);

  let higherPrime = possiblePrimeNumber;
  let lowerPrime = possiblePrimeNumber;
  const primeNumbers = [];
  while (true) {
    lowerPrime -= 1;
    if (isPrime(lowerPrime)) {
      console.log(`The next prime number after ${lowerPrime}`);
      primeNumbers.push(lowerPrime);
      break;
    }
  }
  while (true) {
    higherPrime += 1;
    if (isPrime(higherPrime)) {
      console.log(`The next prime number after ${higherPrime}`);
      primeNumbers.push(higherPrime);
      break;
    }
  }

  return primeNumbers;
}

// console.log(primeNumberDetector(1000));

/**
 * This function should take in an input list, then for each item it should:
 *  Print every item.
 *  If there's a prime number
 *    Add a 4 to the end of the list.
 *  If there's an odd number, that's not a prime
 *    Skip the next adjacent item in the list.
 *  If there's an 13,
 *    Print "Unlucky", and end the loop.
 * @param {*} inputArray
 */
function unluckyLooping(inputArray) {
  let i = 0;
  while (i < inputArray.length) {
    console.log(inputArray[i]);
    if (inputArray[i] === 13) {
      console.log("Unlucky");
      break;
    } else if (isPrime(inputArray[i])) {
      inputArray.push(4);
    } else if (inputArray[i] % 2 !== 0) {
      i += 1;
    }
    i += 1;
  }
}

// unluckyLooping([1, 2, 3, 5, 13, 17]);
