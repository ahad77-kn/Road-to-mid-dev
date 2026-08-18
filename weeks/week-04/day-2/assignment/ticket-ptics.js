const age = 20;
const day = "Saturday";

const CHILD_PRICE = 8;
const ADULT_PRICE = 12;
const SENIOR_PRICE = 9;
const WEEKEND_DISCOUNT = 2;

let price;

if (age < 13) {
    price = CHILD_PRICE;
} else if (age >= 60) {
    price = SENIOR_PRICE;
} else {
    price = ADULT_PRICE;
}

switch (day) {
    case "Saturday":
    case "Sunday":
        price -= WEEKEND_DISCOUNT;
        break;

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        break;

    default:
        console.log("Invalid day.");
}

console.log(`Age: ${age}`);
console.log(`Day: ${day}`);
console.log(`Ticket price: $${price.toFixed(2)}`);

/* in this test we have three different ages and their prices
so first it will check if age is less then 13 so it will 
be child and price will be CHILD_PRICE else if the age is greator or equal to
60 so it will be SENIOR_PRICE else other will be ADULT_PRICE and 
it will check if it is saturday or sunday it will weekend discount
else other will default days. */