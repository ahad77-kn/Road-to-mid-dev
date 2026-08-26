// Day 3 — Student Marks
// ==========================================

const students = [
    {
        name: "Ahad",
        rollNo: 1,
        marks: { math: 82, physics: 74, english: 91 }
    },
    {
        name: "Ali",
        rollNo: 2,
        marks: { math: 76, physics: 88, english: 79 }
    },
    {
        name: "Hamza",
        rollNo: 3,
        marks: { math: 91, physics: 85, english: 94 }
    },
    {
        name: "Usman",
        rollNo: 4,
        marks: { math: 65, physics: 72, english: 68 }
    },
    {
        name: "Bilal",
        rollNo: 5,
        marks: { math: 88, physics: 81, english: 86 }
    },
    {
        name: "Saad",
        rollNo: 6,
        marks: { math: 55, physics: 61, english: 58 }
    },
    {
        name: "Hassan",
        rollNo: 7,
        marks: { math: 95, physics: 92, english: 89 }
    },
    {
        name: "Zain",
        rollNo: 8,
        marks: { math: 71, physics: 67, english: 75 }
    }
];

// 1. Add Student
// Returns a new array without changing the original.
// ------------------------------------------

const addStudent = (students, student) => [
    ...students,
    student
];

// 2. Average for one student
// Returns the student's average marks.
// ------------------------------------------

const averageFor = (student) => {
    const values = Object.values(student.marks);

    return values.reduce(
        (total, mark) => total + mark,
        0
    ) / values.length;
};

// 3. Class Average
// Returns the average for a subject.
// ------------------------------------------

const classAverage = (students, subject) => {
    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + student.marks[subject],
        0
    );

    return total / students.length;
};

// 4. Topper
// Returns the student with the highest average.
// ------------------------------------------

const topper = (students) => {
    if (students.length === 0) {
        return null;
    }

    return students.reduce((top, student) =>
        averageFor(student) > averageFor(top)
            ? student
            : top
    );
};

// 5. Lowest
// Returns the student with the lowest average.
// ------------------------------------------

const lowest = (students) => {
    if (students.length === 0) {
        return null;
    }

    return students.reduce((low, student) =>
        averageFor(student) < averageFor(low)
            ? student
            : low
    );
};

// 6. Passed
// Returns students whose subject marks are above threshold.
// ------------------------------------------

const passed = (students, threshold) =>
    students.filter((student) =>
        Object.values(student.marks)
            .every((mark) => mark >= threshold)
    );


    // 7. Sort by Average
// Returns a new array sorted by average descending.
// ------------------------------------------

const sortByAverage = (students) =>
    [...students].sort(
        (a, b) => averageFor(b) - averageFor(a)
    );


    // 8. Subject Report
// Returns average, highest and lowest for each subject.
// ------------------------------------------

const subjectReport = (students) => {
    if (students.length === 0) {
        return {};
    }

    const subjects = Object.keys(students[0].marks);

    return subjects.reduce((report, subject) => {
        const marks = students.map(
            (student) => student.marks[subject]
        );

        report[subject] = {
            avg: classAverage(students, subject),
            high: Math.max(...marks),
            low: Math.min(...marks)
        };

        return report;
    }, {});
};


// 9. Print Report
// Displays a readable table.
// ------------------------------------------

const printReport = (students) => {
    if (students.length === 0) {
        console.log("No students to display.");
        return;
    }

    const report = students.map((student) => ({
        Name: student.name,
        RollNo: student.rollNo,
        Math: student.marks.math,
        Physics: student.marks.physics,
        English: student.marks.english,
        Average: averageFor(student).toFixed(2)
    }));

    console.table(report);
};


// TESTS / PROGRAM OUTPUT
// ==========================================

console.log("=== STUDENT MARKS REPORT ===\n");

console.log("Class Average - Math:",
    classAverage(students, "math").toFixed(2)
);

console.log("Class Average - Physics:",
    classAverage(students, "physics").toFixed(2)
);

console.log("Class Average - English:",
    classAverage(students, "english").toFixed(2)
);


const best = topper(students);

console.log("\nTopper:");
console.log(best.name, averageFor(best).toFixed(2));


const worst = lowest(students);

console.log("\nLowest:");
console.log(worst.name, averageFor(worst).toFixed(2));


console.log("\nPassed Students:");
console.table(
    passed(students, 60).map((student) => ({
        Name: student.name,
        RollNo: student.rollNo,
        Average: averageFor(student).toFixed(2)
    }))
);


console.log("\nSorted By Average:");
console.table(
    sortByAverage(students).map((student) => ({
        Name: student.name,
        Average: averageFor(student).toFixed(2)
    }))
);


console.log("\nSubject Report:");
console.table(subjectReport(students));


console.log("\nFull Student Report:");
printReport(students);


// ==========================================
// Prove addStudent does not mutate original
// ==========================================

const newStudent = {
    name: "Omar",
    rollNo: 9,
    marks: { math: 80, physics: 80, english: 80 }
};

const updatedStudents = addStudent(students, newStudent);

console.log("\nOriginal student count:", students.length);
console.log("New student count:", updatedStudents.length);