/**
 * Why we have to create an `index.js` file?
 * https://nodejs.org/api/modules.html#modules_folders_as_modules
 */

console.log("Hello World!");
const testVariable = 'Pavi!';
// String concatenation
console.log("Hello World! " + testVariable);
// Comma separated console.log
console.log("Hello World!", testVariable);
// String template
console.log(`Hello World! ${testVariable}`);