const firstnumber = 25;
const secondnumber = 40;
const thirdnumber = 15;

let biggestnumber;

if (firstnumber >= secondnumber && firstnumber >= thirdnumber ) {
    biggestnumber = firstnumber;
} else if (secondnumber >= firstnumber && secondnumber >= thirdnumber) {
    biggestnumber = secondnumber;
} else {
    biggestnumber = thirdnumber ;
}

console.log(`Biggest number: ${biggestnumber}`);

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