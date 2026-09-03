const buttons = document.querySelector("#buttons");
const currentEntry = document.querySelector("#current-entry");
const expression = document.querySelector("#expression");

let entry = "0";
let pendingExpression = "";


// Updates the display from JavaScript state.
const render = () => {
    currentEntry.textContent = entry;
    expression.textContent = pendingExpression;
};


// Handles digit and decimal-point input.
const handleDigit = (digit) => {

    // Only allow one decimal point.
    if (digit === "." && entry.includes(".")) {
        return;
    }

    // Prevent a normal leading zero.
    if (entry === "0" && digit !== ".") {
        entry = digit;
        return;
    }

    entry += digit;
};


// Clear everything.
const clearCalculator = () => {
    entry = "0";
    pendingExpression = "";
};


// Clear only the current number.
const clearEntry = () => {
    entry = "0";
};


// One listener handles ALL calculator buttons.
// This is event delegation.
buttons.addEventListener("click", (event) => {

    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    // Handle digits and decimal point.
    if (button.dataset.digit !== undefined) {
        handleDigit(button.dataset.digit);
        render();
        return;
    }

    // Handle C.
    if (button.dataset.action === "clear") {
        clearCalculator();
        render();
        return;
    }

    // Handle CE.
    if (button.dataset.action === "clear-entry") {
        clearEntry();
        render();
        return;
    }

    // Operators are only displayed for now.
    if (button.dataset.operator !== undefined) {
        pendingExpression = `${entry} ${button.textContent}`;
        render();
        return;
    }

    // Equals does nothing yet because arithmetic
    // is intentionally not part of today's assignment.
    if (button.dataset.action === "equals") {
        return;
    }
});


// Show the initial state.
render();