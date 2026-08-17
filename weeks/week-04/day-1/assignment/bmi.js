const weightKg = 70;
const heightMeters = 1.75;

const bmi = weightKg / (heightMeters * heightMeters);

let category;

if (bmi < 18.5) {
    category = "Underweight";
} else if (bmi < 25) {
    category = "Normal weight";
} else if (bmi < 30) {
    category = "Overweight";
} else {
    category = "Obese";
}

console.log(`BMI: ${bmi.toFixed(1)}`);
console.log(`Category: ${category}`);