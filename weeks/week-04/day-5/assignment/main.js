const math = require("./math");
const strings = require("./strings");
const patterns = require("./patterns");

console.log("================================");
console.log("       DAY 5 — JS REPORT");
console.log("================================");

console.log("\nMATH");
console.log("4 is even:", math.isEven(4));
console.log("Largest:", math.largestOfThree(12, 45, 27));
console.log("5!:", math.factorial(5));
console.log("Sum 1–100:", math.sumTo(100));
console.log("Table of 7:");
console.log(math.multiplicationTable(7).join("\n"));
console.log(
    "Largest in list:",
    math.findLargest([12, 45, 7, 89, 34])
);
console.log(
    "Total:",
    math.calculateTotal(100, 2, 0.1)
);

console.log("\nSTRINGS");
console.log("Reverse:", strings.reverseString("JavaScript"));
console.log("Vowels:", strings.countVowels("JavaScript"));
console.log("Palindrome:", strings.isPalindrome("level"));
console.log("25°C in Fahrenheit:", strings.celsiusToF(25));
console.log("Greeting:", strings.greet("Ahad"));

console.log("\nPATTERNS");
console.log("\nTriangle:");
console.log(patterns.makeTriangle(5));

console.log("\nPyramid:");
console.log(patterns.makePyramid(5));

console.log("\nInverted Triangle:");
console.log(patterns.makeInvertedTriangle(5));

console.log("\n================================");
console.log("          END REPORT");
console.log("================================");