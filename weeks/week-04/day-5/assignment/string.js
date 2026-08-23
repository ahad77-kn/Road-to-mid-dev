// Takes a string and returns it backwards.
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Takes a string and returns the number of vowels.
function countVowels(str) {
    let count = 0;

    for (const character of str.toLowerCase()) {
        if ("aeiou".includes(character)) {
            count++;
        }
    }

    return count;
}

// Takes a word and returns true if it reads the same backwards.
function isPalindrome(word) {
    return word === reverseString(word);
}

// Takes Celsius and returns the Fahrenheit temperature.
function celsiusToF(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Takes a name and optional greeting and returns a greeting message.
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

module.exports = {
    reverseString,
    countVowels,
    isPalindrome,
    celsiusToF,
    greet
};