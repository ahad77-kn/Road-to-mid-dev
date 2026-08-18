const firstNumber = 25;
const secondNumber = 40;
const thirdNumber = 15;

let biggestNumber;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber ) {
    biggestnumber = firstnumber;
} else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    biggestNumber = secondNumber;
} else {
    biggestNumber = thirdNumber ;
}

console.log(`Biggest Number: ${biggestNumber}`);

/* in the test will check if the first number is 
greator or equal to second number and third number then 
it will console biggest number is first number .while in else if condition if
second number is greator or equal to first number and third number so 
it will consle biggest nuumber is second number .and at last if they are not so 
it will ocnsole the biggest number is third number.
*/

/*
Test results:
25, 40, 15 -> 40
90, 20, 50 -> 90
10, 30, 70 -> 70
50, 50, 20 -> 50
*/