// ============================================================
// CALCULATOR STATE
// ============================================================

let entry = "0";
let expression = "";
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;


// ============================================================
// PURE ARITHMETIC FUNCTIONS
// These functions do NOT touch the DOM.
// ============================================================

// 1. Addition
const add = (a, b) => a + b;


// 2. Subtraction
const subtract = (a, b) => a - b;


// 3. Multiplication
const multiply = (a, b) => a * b;


// 4. Division
const divide = (a, b) => {
    if (b === 0) {
        return null;
    }

    return a / b;
};


// 5. Main calculation function
const calculate = (a, operator, b) => {
    if (operator === "+") {
        return add(a, b);
    }

    if (operator === "-") {
        return subtract(a, b);
    }

    if (operator === "*") {
        return multiply(a, b);
    }

    if (operator === "/") {
        return divide(a, b);
    }

    return b;
};


// ============================================================
// DOM
// ============================================================

const buttons = document.querySelector("#buttons");
const currentEntry = document.querySelector("#current-entry");
const expressionDisplay = document.querySelector("#expression");


// ============================================================
// RENDER
// ============================================================

const render = () => {
    currentEntry.textContent = entry;
    expressionDisplay.textContent = expression;
};


// ============================================================
// NUMBER FORMATTING
// ============================================================

// JavaScript floating-point numbers can produce:
// 0.1 + 0.2 = 0.30000000000000004
//
// Rounding to a reasonable number of decimal places fixes
// the display problem without changing the basic calculation.

const formatNumber = (number) => {
    if (!Number.isFinite(number)) {
        return "Error";
    }

    return Number(number.toFixed(10)).toString();
};


// ============================================================
// DIGITS
// ============================================================

const handleDigit = (digit) => {

    if (waitingForSecondNumber) {
        entry = digit === "." ? "0." : digit;
        waitingForSecondNumber = false;
        return;
    }

    if (digit === "." && entry.includes(".")) {
        return;
    }

    if (entry === "0" && digit !== ".") {
        entry = digit;
        return;
    }

    entry += digit;
};


// ============================================================
// OPERATOR
// ============================================================

const handleOperator = (nextOperator) => {

    const currentNumber = Number(entry);

    if (firstNumber === null) {
        firstNumber = currentNumber;
    } else if (operator !== null && !waitingForSecondNumber) {

        const result = calculate(firstNumber, operator, currentNumber);

        if (result === null) {
            entry = "Cannot divide by zero";
            expression = "";
            firstNumber = null;
            operator = null;
            waitingForSecondNumber = true;
            return;
        }

        firstNumber = result;
        entry = formatNumber(result);
    }

    operator = nextOperator;

    expression = `${formatNumber(firstNumber)} ${nextOperator}`;
    waitingForSecondNumber = true;
};


// ============================================================
// EQUALS
// ============================================================

const handleEquals = () => {

    if (firstNumber === null || operator === null) {
        return;
    }

    const secondNumber = Number(entry);

    const result = calculate(
        firstNumber,
        operator,
        secondNumber
    );

    if (result === null) {
        entry = "Cannot divide by zero";
        expression = "";
    } else {
        expression =
            `${formatNumber(firstNumber)} ${operator} ${formatNumber(secondNumber)} =`;

        entry = formatNumber(result);
    }

    firstNumber = null;
    operator = null;
    waitingForSecondNumber = true;
};


// ============================================================
// CLEAR
// ============================================================

const clearCalculator = () => {
    entry = "0";
    expression = "";
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
};


// ============================================================
// CLEAR ENTRY
// ============================================================

const clearEntry = () => {
    entry = "0";
};


// ============================================================
// SIGN TOGGLE
// ============================================================

const toggleSign = () => {

    if (entry === "0" || entry === "Cannot divide by zero") {
        return;
    }

    entry = entry.startsWith("-")
        ? entry.slice(1)
        : `-${entry}`;
};


// ============================================================
// PERCENT
// ============================================================

const handlePercent = () => {

    const number = Number(entry);

    entry = formatNumber(number / 100);
};


// ============================================================
// BACKSPACE
// ============================================================

const handleBackspace = () => {

    if (
        entry === "0" ||
        entry === "Cannot divide by zero"
    ) {
        return;
    }

    entry = entry.length === 1
        ? "0"
        : entry.slice(0, -1);
};


// ============================================================
// BUTTON EVENTS
// ONE LISTENER FOR THE WHOLE CALCULATOR
// ============================================================

buttons.addEventListener("click", (event) => {

    const button = event.target.closest("button");

    if (!button) {
        return;
    }


    // Digit
    if (button.dataset.digit !== undefined) {
        handleDigit(button.dataset.digit);
        render();
        return;
    }


    // Operator
    if (button.dataset.operator !== undefined) {
        handleOperator(button.dataset.operator);
        render();
        return;
    }


    // Actions
    const action = button.dataset.action;

    if (action === "clear") {
        clearCalculator();
    }

    if (action === "clear-entry") {
        clearEntry();
    }

    if (action === "equals") {
        handleEquals();
    }

    if (action === "sign") {
        toggleSign();
    }

    if (action === "percent") {
        handlePercent();
    }

    render();
});


// ============================================================
// KEYBOARD SUPPORT
// ============================================================

document.addEventListener("keydown", (event) => {

    const key = event.key;


    // Numbers and decimal
    if (
        (key >= "0" && key <= "9") ||
        key === "."
    ) {
        handleDigit(key);
        render();
        return;
    }


    // Operators
    if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {
        handleOperator(key);
        render();
        return;
    }


    // Enter = equals
    if (key === "Enter" || key === "=") {
        handleEquals();
        render();
        return;
    }


    // Escape = clear
    if (key === "Escape") {
        clearCalculator();
        render();
        return;
    }


    // Backspace = delete
    if (key === "Backspace") {
        handleBackspace();
        render();
    }
});


// Initial display
render();