//the tests
import rides from '../data/cars.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    // arrange
    const id = 'camaro';
    const expected = 'Chevrolet Camaro SS';

    // act
    const foundCar = findById(rides, id);

    // assert
    assert.ok(foundCar);
    assert.equal(foundCar.name, expected);
});

test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundCar = findById(rides, id);

    // assert
    assert.equal(foundCar, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 25;
    const expected = 75;

    // act 
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});

// This one can be left to students to do...
test('calculate order total', (assert) => {
    // arrange
    const 
    const expected = 75;

    // act
    const orderTotal = calcOrderTotal(cart, rides);

    // assert
    assert.equal(orderTotal, expected);
});