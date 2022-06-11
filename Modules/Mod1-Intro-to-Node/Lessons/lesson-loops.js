const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

/**
 * For loops
 */
for (let i = 0; i < items.length; i += 1) {
  console.log("for loop", i, items[i]);
}

/**
 * While (do)
 */
let j = 0;
while (j < items.length) {
  console.log("while", j, items[j]);
  j += 1;
}

/**
 * For (const of)
 */
for (const k of items) {
  console.log("for const of", k);
}

/**
 * Foreach
 */
items.forEach((l) => console.log("foreach", l));

/**
 * Do while
 */
let m = 0;
do {
  console.log("do while", m, items[m]);
  m += 1
} while (m < items.length);
