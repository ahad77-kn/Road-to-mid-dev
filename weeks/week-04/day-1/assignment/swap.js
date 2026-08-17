let firstNumber = 10;
let secondNumber = 20;

console.log(`Before swap: firstNumber = ${firstNumber}, secondNumber = ${secondNumber}`);

firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;

console.log(`After swap without third variable: firstNumber = ${firstNumber}, secondNumber = ${secondNumber}`);