const number = 17;

let evenOdd;
let sign;
let primeStatus;

if (number === 0) {
    evenOdd = "even";
    sign = "zero";
} else if (number % 2 === 0) {
    evenOdd = "even";
    sign = number > 0 ? "positive" : "negative";
} else {
    evenOdd = "odd";
    sign = number > 0 ? "positive" : "negative";
}

if (number < 2) {
    primeStatus = "not prime";
} else {
    let isPrime = true;

    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
    }

    primeStatus = isPrime ? "prime" : "not prime";
}

console.log(`Number: ${number}`);
console.log(`Even/Odd: ${evenOdd}`);
console.log(`Sign: ${sign}`);
console.log(`Prime: ${primeStatus}`);