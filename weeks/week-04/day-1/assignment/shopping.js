const itemOnePrice = 1200;
const itemTwoPrice = 850;
const itemThreePrice = 500;

const subtotal = itemOnePrice + itemTwoPrice + itemThreePrice;
const gst = subtotal * 0.17;
const total = subtotal + gst;

console.log(`Subtotal: Rs. ${subtotal.toFixed(2)}`);
console.log(`GST (17%): Rs. ${gst.toFixed(2)}`);
console.log(`Total: Rs. ${total.toFixed(2)}`);