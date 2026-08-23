// Takes a number and returns true if it is even.
function isEven(n) {
    return n % 2 === 0;
}

// Takes two numbers and returns the larger number.
function largest(a, b) {
    return a > b ? a : b;
}

// Takes three numbers and returns the largest number.
function largestOfThree(a, b, c) {
    return largest(largest(a, b), c);
}

// Takes a number and returns its factorial.
function factorial(n) {
    if (n < 0) {
        return null;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Takes a number and returns the sum from 1 to that number.
function sumTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

// Takes a number and returns its multiplication table from 1 to 12.
function multiplicationTable(n) {
    const table = [];

    for (let i = 1; i <= 12; i++) {
        table.push(`${n} x ${i} = ${n * i}`);
    }

    return table;
}

// Takes an array of numbers and returns the largest number.
function findLargest(numbers) {
    let largestNumber = numbers[0];

    for (const number of numbers) {
        if (number > largestNumber) {
            largestNumber = number;
        }
    }

    return largestNumber;
}

// Takes price, quantity, and tax rate and returns the total.
function calculateTotal(price, quantity, taxRate) {
    const subtotal = price * quantity;
    return subtotal + subtotal * taxRate;
}

module.exports = {
    isEven,
    largest,
    largestOfThree,
    factorial,
    sumTo,
    multiplicationTable,
    findLargest,
    calculateTotal
};