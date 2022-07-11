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

/**
 *
 * @param {*} inputNum - number to evaluate if prime or not
 * @returns boolean - whether prime number or not
 */
const primeNumberDetector = (inputNum) => {
  for (let i = 2; i < inputNum; i += 1) {
    if (inputNum % i === 0) {
      return false;
    }
  }
  return i > 1;
};
