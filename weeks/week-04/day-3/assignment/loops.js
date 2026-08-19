// 1. sum 1-100

console.log("1. Sum 1–100");

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// ====================

// 2. multiplication table for any number ,1-12

console.log("\n2. Multiplication Table");

const number = 7;
for (let i = 1; i <= 12; i++) {
     console.log(`${number} x ${i} = ${number * i}`);
}

//=====================

// 3. reverse a string

console.log("\n3. Reverse a String");

const word = "JavaScript";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

console.log(reversed);

//=====================

// 4. count the vowels in a sentence 

console.log("\n4. Count Vowels");

const sentence ="im ahad khan";
let vowelCount = 0;
for (const character of sentence.toLowerCase()) {
     if ("aeiou".includes(character)) {
        vowelCount++;
     }
}

console.log(`Number of vowels: ${vowelCount}`);

//=====================

// 5. fizz buzz - 1-100

console.log("\n5. FizzBuzz");

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
        continue;// Skip the rest because multiples of 15 need FizzBuzz.
         if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {

        console.log(i);
    }
}
}

//=====================

// 6. factorial of n 

console.log("\n6. Factorial");

const n = 5;
let factorial = 1;
let counter = 1;

while (counter <= n) {
    factorial *= counter;
    counter++;
}

console.log(`${n}! = ${factorial}`);

//=====================

// 7. check wether a word is palindrom 

console.log("\n7. Palindrome");

const palindromeWord = "level";
let reversedPalindrome = "";

for (let i = palindromeWord.length - 1; i >= 0; i--) {
    reversedPalindrome += palindromeWord[i];
}

if (palindromeWord === reversedPalindrome) {
    console.log(`${palindromeWord} is a palindrome.`);
} else {
    console.log(`${palindromeWord} is not a palindrome.`);
}

//======================

// 8. print a triangle of stars

console.log("\n8. Triangle");

const traingleHeight = 5;
for (let row = 1; row <=traingleHeight; row++) {
     console.log("*".repeat(row));
}

//======================

// 9. print a pyramid of stars 

console.log("\n9. Pyramid");

const pyramidHeight = 5;

for (let row = 1; row <= pyramidHeight; row++) {
    const spaces = " ".repeat(pyramidHeight - row);
    const stars = "*".repeat(row * 2 - 1);

    console.log(spaces + stars);
}

//======================

// 10. find the largest number in a hard-coded list 

console.log("\n10. Largest Number");

const number = [12, 45, 7, 89, 34, 67, 23];
let largest = numbers[0];
for (const number of numbers) {
    if (number > largest) {
        largest = number;
    }

    if (largest === 89) {
        break; // Stop because 89 is known to be the largest in this list.
    }
}

console.log(`Largest number: ${largest}`);

//======================