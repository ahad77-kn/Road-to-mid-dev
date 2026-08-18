// Swap with a third variable
let firstValue = 10;
let secondValue = 20;

const temporaryValue = firstValue;
firstValue = secondValue;
secondValue = temporaryValue;

console.log(`With third variable: firstValue = ${firstValue}, secondValue = ${secondValue}`);

// In real code, I would use a third variable because it is easier to understand.
// It is also safer and makes the code easier for another developer to read.