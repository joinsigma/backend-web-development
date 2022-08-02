/**
 *
 * @param {*} inputArr - Unsorted input array
 * @returns
 */
function selectionSortMinFirst(inputArr) {
  let n = inputArr.length;
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
    }
  }
  return inputArr;
}

/**
 *
 * @param {*} inputArr - Unsorted input array
 * @returns
 */
function selectionSortMaxFirst(inputArr) {
  let n = inputArr.length;
  for (let i = 0; i < n; i++) {
    let max = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] > inputArr[min]) {
        max = j;
      }
    }
    if (max != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[max];
      inputArr[max] = tmp;
    }
  }
  return inputArr;
}

const printOutDuplicates = (arr1, arr2) => {
  arr1.forEach((item) => {
    if (arr2.includes(item)) {
      console.log(item);
    }
  });
};

/**
 *
 * @param {*} possiblePrimeNo - number to evaluate if prime or not
 * @returns boolean - whether prime number or not
 */
const primeNumberDetector = (possiblePrimeNo) => {
  if (possiblePrimeNo < 0) {
    console.log("Prime number have to be greater than 0");
    return;
  }
  if (possiblePrimeNo <= 1) {
    return false;
  }
  let i = possiblePrimeNo - 1;
  while (i > 1) {
    if (possiblePrimeNo % i === 0) {
      return false;
    }
    i -= 1;
  }
  return true;
};
