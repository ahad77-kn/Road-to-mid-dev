// js stores actual state and dom displays this values inly

let count = 0;

const countDisplay = document.querySelector("#count");
const stepInput = document.querySelector("#step");
const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");

const MAX = 100;
const MIN = -100;

// render() updates everything on the screen
// based on the current value of count.
const render = () => {
    countDisplay.textContent = count;

    // Remove old colour classes first.
    countDisplay.classList.remove("positive", "negative");

    // Add the correct colour class.
    if (count > 0) {
        countDisplay.classList.add("positive");
    } else if (count < 0) {
        countDisplay.classList.add("negative");
    }

    // Disable buttons at the limits.
    increaseButton.disabled = count >= MAX;
    decreaseButton.disabled = count <= MIN;
};

// + button
increaseButton.addEventListener("click", () => {
    const step = Number(stepInput.value);

    count = Math.min(count + step, MAX);

    render();
});


// − button
decreaseButton.addEventListener("click", () => {
    const step = Number(stepInput.value);

    count = Math.max(count - step, MIN);

    render();
});


// Reset button
resetButton.addEventListener("click", () => {
    count = 0;

    render();
});

// Display the initial state.
render();