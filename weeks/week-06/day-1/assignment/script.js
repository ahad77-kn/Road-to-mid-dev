// 1. Select an element by ID
const mainTitle = document.getElementById("main-title");
console.log(mainTitle);

// 2. Select an element by class
const firstDescription = document.querySelector(".description");
console.log(firstDescription);


// 3. Select an element by tag
const firstParagraph = document.getElementsByTagName("p")[0];
console.log(firstParagraph);


// 4. Select an element using a CSS selector
const studentTable = document.querySelector("#student-table");
console.log(studentTable);


// 5. Select all elements of something
const descriptions = document.querySelectorAll(".description");
console.log(descriptions);


// 6. Change text using textContent
mainTitle.textContent = "DOM Day 1 Practice";


// 7. Change markup using innerHTML
const container = document.getElementById("container");

container.innerHTML = "<strong>Content added with innerHTML</strong>";

// 8. Read an attribute
const image = document.getElementById("atom-image");

console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));


// 9. Set an attribute
image.setAttribute("alt", "A new placeholder image");
image.setAttribute("src", "atom.jpg");

// 10. Add a class
mainTitle.classList.add("highlight");


// 11. Remove a class
mainTitle.classList.remove("highlight");


// 12. Toggle a class
const button = document.getElementById("action-button");

button.classList.toggle("active");

// 13. Create a new element and append it
const newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created with JavaScript.";

container.append(newParagraph);


// 14. Insert an element before another element
const newHeading = document.createElement("h3");

newHeading.textContent = "Inserted Heading";

container.insertBefore(newHeading, newParagraph);


// 15. Remove an element
newParagraph.remove();


// 16. Loop over a NodeList and change all elements
descriptions.forEach((description) => {
    description.textContent = "Updated paragraph";
});

// 17. Walk the DOM tree
const skillsList = document.getElementById("skills-list");

// parentElement
console.log(skillsList.parentElement);

// children
console.log(skillsList.children);

// nextElementSibling
console.log(skillsList.nextElementSibling);


// 18. Read a data- attribute using dataset
const box = document.querySelector(".box");

console.log(box.dataset.city);


// 19. Change a CSS custom property from JavaScript
document.documentElement.style.setProperty("--main-color", "green");

// 20. Read and set an href attribute
const link = document.getElementById("my-link");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://example.com");