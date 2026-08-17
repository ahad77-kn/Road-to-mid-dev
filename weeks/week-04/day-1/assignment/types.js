const userName = "Ahad";
const age = 20;
const isLearning = true;
const emptyValue = null;
let futureValue;
const user = {
    name: "Ahad",
    age: 20
};

console.log(`userName: ${typeof userName}`);
console.log(`age: ${typeof age}`);
console.log(`isLearning: ${typeof isLearning}`);
console.log(`emptyValue: ${typeof emptyValue}`);
console.log(`futureValue: ${typeof futureValue}`);
console.log(`user: ${typeof user}`);

// typeof null returns "object", which is a historical JavaScript bug.