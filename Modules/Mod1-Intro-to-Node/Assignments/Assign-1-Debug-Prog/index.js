const var1 = "";
const var2 = "";
const var3 = "";
const var4 = "";
const var5 = "";

function passTests() {
  console.log("var1 === 'eleven:'", var1 === "eleven");
  console.log("(var2 + var3) === 6", var2 + var3 === 6);
  console.log("(var2 * var3) === 8", var2 * var3 === 8);
  console.log(
    "var4.concat(var5) === [1, 2, 3, 4]",
    var4.concat(var5) === [1, 2, 3, 4]
  );
}

/**
 * Make sure all the console logs return true.
 */
passTests();

function passTests2() {}

passTests2();
