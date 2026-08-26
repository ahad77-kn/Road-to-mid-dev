// Day 1 — Arrays
// Loops only — no array methods
// ==========================================


// 1. Sum of an array
function sumArray(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}


// 2. Average of an array
function averageArray(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total / numbers.length;
}


// 3. Largest and smallest
function largestAndSmallest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];
    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }

        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return {
        largest: largest,
        smallest: smallest
    };
}


// 4. Count numbers above the average
function countAboveAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    const average = total / numbers.length;
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > average) {
            count++;
        }
    }

    return count;
}


// 5. Reverse an array without .reverse()
function reverseArray(numbers) {
    const reversed = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed[reversed.length] = numbers[i];
    }

    return reversed;
}


// 6. Remove duplicates
function removeDuplicates(numbers) {
    const unique = [];

    for (let i = 0; i < numbers.length; i++) {
        let alreadyExists = false;

        for (let j = 0; j < unique.length; j++) {
            if (numbers[i] === unique[j]) {
                alreadyExists = true;
                break;
            }
        }

        if (!alreadyExists) {
            unique[unique.length] = numbers[i];
        }
    }

    return unique;
}


// 7. Merge two arrays and sort ascending
function mergeAndSort(first, second) {
    const merged = [];

    for (let i = 0; i < first.length; i++) {
        merged[merged.length] = first[i];
    }

    for (let i = 0; i < second.length; i++) {
        merged[merged.length] = second[i];
    }

    // Bubble sort
    for (let i = 0; i < merged.length - 1; i++) {
        for (let j = 0; j < merged.length - 1 - i; j++) {
            if (merged[j] > merged[j + 1]) {
                const temp = merged[j];
                merged[j] = merged[j + 1];
                merged[j + 1] = temp;
            }
        }
    }

    return merged;
}


// 8. Find index of a value without indexOf
function findIndex(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }

    return -1;
}


// 9. Split an array into evens and odds
function splitEvensAndOdds(numbers) {
    const evens = [];
    const odds = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens[evens.length] = numbers[i];
        } else {
            odds[odds.length] = numbers[i];
        }
    }

    return {
        evens: evens,
        odds: odds
    };
}


// 10. Rotate an array left by n positions
function rotateLeft(numbers, n) {
    const result = [];

    if (numbers.length === 0) {
        return result;
    }

    const positions = n % numbers.length;

    for (let i = positions; i < numbers.length; i++) {
        result[result.length] = numbers[i];
    }

    for (let i = 0; i < positions; i++) {
        result[result.length] = numbers[i];
    }

    return result;
}

// TESTS
// ==========================================

const normal = [10, 20, 30, 40, 50];
const empty = [];
const single = [7];

console.log("1. Sum");
console.log(sumArray(normal));
console.log(sumArray(empty));
console.log(sumArray(single));
console.log("Original:", normal);


console.log("\n2. Average");
console.log(averageArray(normal));
console.log(averageArray(empty));
console.log(averageArray(single));
console.log("Original:", normal);


console.log("\n3. Largest and Smallest");
console.log(largestAndSmallest(normal));
console.log(largestAndSmallest(empty));
console.log(largestAndSmallest(single));
console.log("Original:", normal);


console.log("\n4. Above Average");
console.log(countAboveAverage(normal));
console.log(countAboveAverage(empty));
console.log(countAboveAverage(single));
console.log("Original:", normal);


console.log("\n5. Reverse");
console.log(reverseArray(normal));
console.log(reverseArray(empty));
console.log(reverseArray(single));
console.log("Original:", normal);


console.log("\n6. Remove Duplicates");
const duplicateArray = [10, 20, 10, 30, 20];
console.log(removeDuplicates(duplicateArray));
console.log(removeDuplicates(empty));
console.log(removeDuplicates(single));
console.log("Original:", duplicateArray);


console.log("\n7. Merge and Sort");
const first = [30, 10, 50];
const second = [20, 40];
console.log(mergeAndSort(first, second));
console.log(mergeAndSort(empty, empty));
console.log(mergeAndSort(single, empty));
console.log("Original first:", first);
console.log("Original second:", second);


console.log("\n8. Find Index");
console.log(findIndex(normal, 30));
console.log(findIndex(empty, 30));
console.log(findIndex(single, 7));
console.log("Original:", normal);


console.log("\n9. Split Evens and Odds");
console.log(splitEvensAndOdds(normal));
console.log(splitEvensAndOdds(empty));
console.log(splitEvensAndOdds(single));
console.log("Original:", normal);


console.log("\n10. Rotate Left");
console.log(rotateLeft(normal, 2));
console.log(rotateLeft(empty, 2));
console.log(rotateLeft(single, 2));
console.log("Original:", normal);