## DOM DAY 1 NOTES

## text content

`textContent` gets or changes all the text inside an element.

It does not treat HTML tags as HTML.

Example:

```js
element.textContent = "<strong>Hello</strong>";

- inner text

innerText gets or changes the visible text of an element.

It is affected by CSS and what is currently visible on the page.

innerHTML

innerHTML gets or changes the HTML inside an element.

Example:

element.innerHTML = "<strong>Hello</strong>";

The browser treats <strong> as an HTML element.