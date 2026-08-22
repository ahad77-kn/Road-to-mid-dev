# scope

- a variable created inside a funtion is normally avalible inside that funtion.

for example;
....js
function showName() {
    const name = "Ahad";
    return = name;
}
console.log(showName());
console.log(name); // ReferenceError