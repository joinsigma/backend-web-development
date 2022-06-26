/**
 * Complete `passTests`, so that all console logs will return true
 */
function passTests() {
  const var1 = "";
  const var2 = "";
  const var3 = "";
  const var4 = "";
  const var5 = "";
  console.log("var1 === 'eleven:'", var1 === "eleven");
  console.log("(var2 + var3) === 6", var2 + var3 === 6);
  console.log("(var2 * var3) === 8", var2 * var3 === 8);
  console.log(
    "var4.concat(var5) === [1, 2, 3, 4]",
    var4.concat(var5) === [1, 2, 3, 4]
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
