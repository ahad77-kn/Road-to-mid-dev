const celsius = 25;
const fahrenheit = 98;

const convertedFahrenheit = (celsius * 9 / 5) + 32;
const convertedCelsius = (fahrenheit - 32) * 5 / 9;

console.log(`${celsius}°C = ${convertedFahrenheit.toFixed(1)}°F`);
console.log(`${fahrenheit}°F = ${convertedCelsius.toFixed(1)}°C`);