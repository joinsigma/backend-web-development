/**
 * function definitions
 */
// Function declaration
function myNewFunction(var1, var2) {
  console.log(var1, var2);
}
// Function expression
const myOtherFunction = function(var1) {
  console.log(var1);
}

/**
 * Arrow functions
 */
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(addNumbers(1, 2));
