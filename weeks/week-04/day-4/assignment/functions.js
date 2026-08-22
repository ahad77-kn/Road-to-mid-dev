// 1. isEven(n)
// Checking  if a number is even.

function isEven(n) {
    return n % 2 === 0;
}

console.log("1. isEven");
console.log(isEven(4));   // it is true
console.log(isEven(7));   // it is false
console.log(isEven(0));   // true — edge case

//================================

// 2. getGrade(marks)
// it will Return a grade based on marks.

function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("\n2. getGrade");
console.log(getGrade(95));  // A
console.log(getGrade(72));  // C
console.log(getGrade(0));   // F — edge case

//======================================


// 3. celsiusToF(c)
//we will Convert Celsius to Fahrenheit here.

function celsiusToF(c) {
    return (c * 9 / 5) + 32;
}

console.log("\n3. celsiusToF");
console.log(celsiusToF(0));    // 32 — edge case
console.log(celsiusToF(25));   // 77
console.log(celsiusToF(-10));  // 14 — negative

//=======================================

// 4. reverseString(str)
// Reverses a string without using .reverse().

function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log("\n4. reverseString");
console.log(reverseString("hello")); // olleh
console.log(reverseString("JavaScript")); // tpircSavaJ
console.log(reverseString("")); // "" — edge case

//=======================================

// 5. countVowels(str)
// Counts vowels in a string.

function countVowels(str) {
    let count = 0;

    for (const character of str.toLowerCase()) {
        if ("aeiou".includes(character)) {
            count++;
        }
    }

    return count;
}

console.log("\n5. countVowels");
console.log(countVowels("hello"));       // 2
console.log(countVowels("JavaScript"));  // 3
console.log(countVowels(""));            // 0 — edge case


// ==========================================

// 6. isPalindrome(word)
// Checks whether a word reads the same backwards.

function isPalindrome(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return word === reversed;
}

console.log("\n6. isPalindrome");
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome(""));      // true — edge case


// ======================================

// 7. factorial(n)
// Calculates the factorial of a number.

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log("\n7. factorial");
console.log(factorial(5));   // 120
console.log(factorial(0));   // 1 — edge case
console.log(factorial(-3));  // error message — negative

//=====================================

// 8. largest(a, b, c)
// Finds the largest of three numbers.

function largest(a, b, c) {
    let biggest = a;

    if (b > biggest) {
        biggest = b;
    }

    if (c > biggest) {
        biggest = c;
    }

    return biggest;
}

console.log("\n8. largest");
console.log(largest(10, 20, 30)); // 30
console.log(largest(-5, -2, -10)); // -2 — negative
console.log(largest(0, 0, 0)); // 0 — edge case


// ==========================================

// 9. calculateTotal(price, qty, taxRate)
// Calculates price + tax.

function calculateTotal(price, qty, taxRate) {
    const subtotal = price * qty;
    const tax = subtotal * taxRate;

    return subtotal + tax;
}

console.log("\n9. calculateTotal");
console.log(calculateTotal(100, 2, 0.10)); // 220
console.log(calculateTotal(50, 1, 0));    // 50 — edge case
console.log(calculateTotal(100, 0, 0.10)); // 0 — edge case


// ==============================================

// 10. greet(name, greeting = "Hello")
// Default parameter: greeting is "Hello" if nothing is provided.

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log("\n10. greet");
console.log(greet("Ahad"));             // Hello, Ahad!
console.log(greet("Ahad", "Hi"));       // Hi, Ahad!
console.log(greet(""));                 // Hello, ! — edge case

//===================================

// Three ways to write a function


// A. Function declaration
function addDeclaration(a, b) {
    return a + b;
}


// B. Function expression
const addExpression = function (a, b) {
    return a + b;
};


// C. Arrow function
const addArrow = (a, b) => {
    return a + b;
};
