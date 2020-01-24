import { findById } from '../common/utils.js';

//render cars is the name of the function to adapt the DOM
function renderCars(cars) {
    //creating a 'li' HTML
    const li = document.createElement('p');
    li.className = cars.category;
    li.title = cars.description;
    li.textContent = cars.description;

    //creating a 'h3' in HTML
    const h3 = document.createElement('h3');
    //giving the 'h3' some text content
    h3.textContent = cars.name;
    //placing the 'h3' in the liTag
    li.appendChild(h3);
    
    //creating an imgTag in HTML
    const img = document.createElement('img');
    img.src = cars.image;
    img.classList.add ('pics');
    li.appendChild(img);
    

    //creating a 'p' in HTML
    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = cars.price;
    //placing the 'p' in the liTag
    li.appendChild(p);
    
    //creating an 'add' button for shopping cart
    const button = document.createElement('button');
    //giving the button text content (words)
    button.textContent = 'Add';

    button.value = cars.id; 
    //adding on-click event listener to button
    button.addEventListener('click', () => {
        
        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        //if there is no cart set it to falsy/undefined/null/empty array
        else {
            cart = [];
        }

        let lineItem = findById(cart, cars.id); 
    
        if (!lineItem) {
            lineItem = {
                id: cars.id,
                quantity: 1
            };

            cart.push(lineItem);
        }
        //if already item in cart, increase quantity
        else {
            lineItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        //send alert stating what was added
        alert('1 ' + cars.name + ' added to the cart.');

    });
        //placing the 'button' in the pTag
    p.appendChild(button);

    li.appendChild(p);
    return li;
}



export default renderCars;