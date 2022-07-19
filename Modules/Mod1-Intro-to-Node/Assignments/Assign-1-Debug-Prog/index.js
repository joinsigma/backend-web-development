/**
 * Complete `passTests`, so that all console logs will return true
 */
function passTests() {
  const var1 = null;
  const var2 = null;
  const var3 = null;
  const var4 = null;
  const var5 = null;
  console.log("var1 === 'eleven:'", var1 === "eleven");
  console.log("(var2 + var3) === 6", var2 + var3 === 6);
  console.log("(var2 * var3) === 8", var2 * var3 === 8);
  console.log("Total sum of array 'var4' === 10", var4.reduce((p, c) => p + c) === 10);
  console.log(
    "var4.concat(var5) === [1, 2, 3, 4, 5, 6, 7]",
    var4.concat(var5).every((v) => [1, 2, 3, 4, 5, 6, 7].indexOf(v) >= 0)
  );
}
passTests();

/**
 * Complete `printTimeTaken`, to console.log the time taken to run the function.
 */
function printTimeTaken() {
  const now = new Date();
  console.log(`
    I've started at ${now}
    How long will I take to complete?
    I don't think it will take that long.
  `);
  // Calculate how long it took
  const howLong = "";
  console.log(`I took this long to run: ${howLong}secs`);
}
printTimeTaken();
