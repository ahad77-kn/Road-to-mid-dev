// shopping cart manages products and calculate totels.

const cart = {
    customer: {
        name: "Ahad",
        city: "Rawalpindi"
    },

    taxRate: 0.17,

    items: [],

    // Adds a product to the cart.
    addItem(item) {
        this.items.push({
            ...item
        });

        return this.items;
    },

    // Removes a product using its name.
    removeItem(name) {
        this.items = this.items.filter(
            (item) => item.name !== name
        );

        return this.items;
    },

    // Updates the quantity of a product.
    updateQty(name, quantity) {
        const item = this.items.find(
            (item) => item.name === name
        );

        if (!item) {
            return "Item not found";
        }

        item.qty = quantity;
        return item;
    },

    // Calculates the cart total including tax.
    total() {
        const subtotal = this.items.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );

        return subtotal + subtotal * this.taxRate;
    },

    // Counts the total number of products.
    itemCount() {
        return this.items.reduce(
            (count, item) => count + item.qty,
            0
        );
    }
};


// Dot notation
console.log(cart.taxRate);

// Bracket notation
console.log(cart["items"]);

// Bracket notation is required when the property
// name comes from a variable.
const property = "customer";
console.log(cart[property]);


// Object destructuring
const { customer, taxRate } = cart;
console.log(customer.name, taxRate);


// Destructure customer
const { name, city } = customer;
console.log(name, city);


// Destructure another object
const product = {
    name: "Keyboard",
    price: 2500,
    qty: 2
};

const { price, qty } = product;
console.log(price, qty);


// Object.keys
console.log(Object.keys(product));

// Object.values
console.log(Object.values(product));

// Object.entries
console.log(Object.entries(product));


// Spread copies the product without changing the original.
const updatedProduct = {
    ...product,
    qty: 3
};

console.log(updatedProduct);


// Testing cart methods
cart.addItem(product);

cart.addItem({
    name: "Mouse",
    price: 1200,
    qty: 1
});

console.log(cart.items);

console.log(cart.itemCount());

console.log(cart.total());

console.log(cart.updateQty("Mouse", 2));

console.log(cart.total());

console.log(cart.removeItem("Keyboard"));

console.log(cart.items);