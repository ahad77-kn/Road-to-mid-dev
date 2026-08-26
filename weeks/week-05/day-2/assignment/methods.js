// Day 2 — Array Methods
// No for loops
// Arrow functions throughout
// ==========================================


// 1. Sum of an array
const sumArray = (numbers) =>
    numbers.reduce((total, number) => total + number, 0);


// 2. Average of an array
const averageArray = (numbers) =>
    numbers.length === 0
        ? 0
        : numbers.reduce((total, number) => total + number, 0) /
          numbers.length;


// 3. Largest and smallest
const largestAndSmallest = (numbers) => {
    if (numbers.length === 0) {
        return null;
    }

    return {
        largest: numbers.reduce((largest, number) =>
            number > largest ? number : largest
        ),
        smallest: numbers.reduce((smallest, number) =>
            number < smallest ? number : smallest
        )
    };
};


// 4. Count numbers above the average
const countAboveAverage = (numbers) => {
    const average = averageArray(numbers);

    return numbers.filter((number) => number > average).length;
};


// 5. Reverse an array
const reverseArray = (numbers) =>
    [...numbers].reverse();


// 6. Remove duplicates
const removeDuplicates = (numbers) =>
    numbers.filter((number, index) =>
        numbers.indexOf(number) === index
    );


// 7. Merge two arrays and sort ascending
const mergeAndSort = (first, second) =>
    [...first, ...second].sort((a, b) => a - b);


// 8. Find the index of a value
const findIndex = (numbers, target) =>
    numbers.findIndex((number) => number === target);


// 9. Split an array into evens and odds
const splitEvensAndOdds = (numbers) => ({
    evens: numbers.filter((number) => number % 2 === 0),
    odds: numbers.filter((number) => number % 2 !== 0)
});


// 10. Rotate an array left by n positions
const rotateLeft = (numbers, n) => {
    if (numbers.length === 0) {
        return [];
    }

    const positions = n % numbers.length;

    return [
        ...numbers.slice(positions),
        ...numbers.slice(0, positions)
    ];
};


// ==========================================
// 11. List of name lengths
// ==========================================

const getNameLengths = (names) =>
    names.map((name) => name.length);


// ==========================================
// 12. Prices after 17% tax
// ==========================================

const pricesAfterTax = (prices) =>
    prices.map((price) => price * 1.17);


// ==========================================
// 13. Group words by first letter
// ==========================================

const groupByFirstLetter = (words) =>
    words.reduce((groups, word) => {
        const firstLetter = word[0];

        if (!groups[firstLetter]) {
            groups[firstLetter] = [];
        }

        groups[firstLetter].push(word);

        return groups;
    }, {});


// ==========================================
// 14. Convert "a,1" into { key: "a", value: 1 }
// ==========================================

const convertPairs = (pairs) =>
    pairs.map((pair) => {
        const [key, value] = pair.split(",");

        return {
            key,
            value: Number(value)
        };
    });


// ==========================================
// 15. In-stock products under 1000,
// sorted by price
// ==========================================

const getAffordableProducts = (products) =>
    products
        .filter((product) => product.inStock && product.price < 1000)
        .map((product) => ({
            name: product.name,
            price: product.price
        }))
        .sort((a, b) => a.price - b.price);


// ==========================================
// TESTS
// ==========================================

console.log("1. Sum:", sumArray([10, 20, 30]));

console.log("2. Average:", averageArray([10, 20, 30]));

console.log(
    "3. Largest & Smallest:",
    largestAndSmallest([10, 5, 30, 2])
);

console.log(
    "4. Above Average:",
    countAboveAverage([10, 20, 30, 40])
);

console.log(
    "5. Reverse:",
    reverseArray([1, 2, 3, 4])
);

console.log(
    "6. Remove Duplicates:",
    removeDuplicates([1, 2, 2, 3, 3, 4])
);

console.log(
    "7. Merge & Sort:",
    mergeAndSort([5, 1, 3], [4, 2])
);

console.log(
    "8. Find Index:",
    findIndex(["apple", "banana", "orange"], "banana")
);

console.log(
    "9. Evens & Odds:",
    splitEvensAndOdds([1, 2, 3, 4, 5, 6])
);

console.log(
    "10. Rotate:",
    rotateLeft([1, 2, 3, 4, 5], 2)
);

console.log(
    "11. Name Lengths:",
    getNameLengths(["Ahad", "Ali", "Muhammad"])
);

console.log(
    "12. Prices After Tax:",
    pricesAfterTax([500, 1000, 2000])
);

console.log(
    "13. Grouped Words:",
    groupByFirstLetter([
        "apple",
        "ant",
        "banana",
        "ball",
        "cat"
    ])
);

console.log(
    "14. Converted Pairs:",
    convertPairs(["a,1", "b,2"])
);

const products = [
    { name: "Keyboard", price: 800, inStock: true },
    { name: "Mouse", price: 500, inStock: true },
    { name: "Monitor", price: 5000, inStock: true },
    { name: "USB Cable", price: 300, inStock: false },
    { name: "Headphones", price: 900, inStock: true }
];

console.log(
    "15. Affordable Products:",
    getAffordableProducts(products)
);