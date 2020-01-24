import cart from '../data/cart.js';
import rides from '../data/cars.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const findCars = findById(rides, lineItem.id);
    const dom = renderLineItem(lineItem, findCars);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, rides);
orderTotalCell.textContent = toUSD(orderTotal);