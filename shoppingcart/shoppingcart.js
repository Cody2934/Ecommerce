//importing some functions
// import cart from '../data/cart.js';
import rides from '../data/cars.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

//naming some nonchanging variable getters
const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

//
const json = localStorage.getItem('CART');
let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const findCars = findById(rides, lineItem.id);
    const dom = renderLineItem(lineItem, findCars);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, rides);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
    placeOrderButton.textContent = 'Cart Empty';
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order Placed:\n' + JSON.stringify (cart, true, 2));
        window.location = '../frontpageindex.html';
    });
}