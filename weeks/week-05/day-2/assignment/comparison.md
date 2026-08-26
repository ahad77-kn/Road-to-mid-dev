# Loop vs Array Methods

## Drill 1 — Sum

### Loop version

```js
const sumArray = (numbers) => {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
};