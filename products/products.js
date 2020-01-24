import rides from '../data/cars.js';
import renderCars from './renderCars.js';

const list = document.getElementById('cars');

for (let i = 0; i < rides.length; i++) {
    const cars = rides[i];
    const dom = renderCars(cars);
    list.appendChild(dom);
}