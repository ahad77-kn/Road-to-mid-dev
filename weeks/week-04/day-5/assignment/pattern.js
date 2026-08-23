// Takes a height and returns a triangle of stars.
function makeTriangle(height) {
    const rows = [];

    for (let row = 1; row <= height; row++) {
        rows.push("*".repeat(row));
    }

    return rows.join("\n");
}

// Takes a height and returns a pyramid of stars.
function makePyramid(height) {
    const rows = [];

    for (let row = 1; row <= height; row++) {
        const spaces = " ".repeat(height - row);
        const stars = "*".repeat(row * 2 - 1);

        rows.push(spaces + stars);
    }

    return rows.join("\n");
}

// Takes a height and returns an upside-down triangle.
function makeInvertedTriangle(height) {
    const rows = [];

    for (let row = height; row >= 1; row--) {
        rows.push("*".repeat(row));
    }

    return rows.join("\n");
}

module.exports = {
    makeTriangle,
    makePyramid,
    makeInvertedTriangle
};