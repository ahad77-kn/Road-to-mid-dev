const firstnumber = 25;
const secondnumber = 10;
const thirdnumber = 40;

let biggestnumber;

if (firstnumber >= secondnumber && firstnumber >= thirdnumber ) {
    biggestnumber = firstnumber;
} else if (secondnumber >= firstnumber && secondnumber >= thirdnumber) {
    biggestnumber = secondnumber;
} else {
    biggestnumber = thirdnumber ;
}

console.log(`Biggest number: ${biggestNumber}`);

/* in the test will check if the first number is 
greator or equal to second number and third number then 
it will console biggest number is first number .while in else if condition if
second number is greator or equal to first number and third number so 
it will consle biggest nuumber is second number .and at last if they are not so 
it will ocnsole the biggest number is third number.
*/