import { insertionSort, primeNumberDetector } from "./index";

/**
 * Test cases to pass
 */
console.log(
  `
      Input: [1, 2, 3, 4]
      Expected: [1, 2, 3, 4]
      Actual: ${insertionSort([1, 2, 3, 4])}
  `,
  insertionSort([1, 2, 3, 4]) === [1, 2, 3, 4]
);
console.log(
  `
        Input: [4, 3, 2, 1]
        Expected: [1, 2, 3, 4]
        Actual: ${insertionSort([4, 3, 2, 1])}
    `,
  insertionSort([4, 3, 2, 1]) === [1, 2, 3, 4]
);
console.log(
  `
    Input: [3, 9, 1, 24, 42, 999, 12]
    Expected: [1, 3, 9, 12, 24, 42, 999]
    Actual: ${insertionSort([3, 9, 1, 24, 42, 999, 12])}
      `,
  insertionSort([3, 9, 1, 24, 42, 999, 12]) === [1, 3, 9, 12, 24, 42, 999]
);

console.log(
  `
  Input: 3
  Expected: 3
  Actual: ${primeNumberDetector(3)}
    
    `,
  primeNumberDetector(3) === 3
);

console.log(
  `
    Input: 4
    Expected: [3, 5]
    Actual: ${primeNumberDetector(4)}
      
      `,
  primeNumberDetector(4) == [3, 5]
);

console.log(
  `
    Input: 27
    Expected: [23, 29]
    Actual: ${primeNumberDetector(27)}
      
      `,
  primeNumberDetector(27) === [23, 29]
);

console.log(
  `
    Input: 1
    Expected: [2]
    Actual: ${primeNumberDetector(1)}
      
      `,
  primeNumberDetector(1) === [2]
);

console.log(
  `
    Input: 999
    Expected: [997, 1009]
    Actual: ${primeNumberDetector(999)}
      
      `,
  primeNumberDetector(999) === [997, 1009]
);
