const year = 2024;

const isLeapYear =
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0;

if (isLeapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

/*
Test results:
1900 -> not a leap year
2000 -> leap year
2024 -> leap year
2025 -> not a leap year
*/