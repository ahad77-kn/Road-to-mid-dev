const MARKS_A = 80;
const MARKS_B = 70;
const MARKS_C = 60;
const MARKS_D = 50;

const marks = 75;

let grade;
if ( marks >= MARKS_A ) {
    grade = "A";
} else if (marks >= MARKS_B) {
    grade = "B";
} else if (marks >= MARKS_C) {
    grade = "C";
} else if (marks >= MARKS_D) {
    grade = "D";
} else {
    grade = "f";
}

console.log(`Marks: ${marks}`);
console.log(`Grade: ${grade}`);

/*
Test results:
80 -> A
75 -> B
60 -> C
45 -> F
*/