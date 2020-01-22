function renderCars(cars) {
    const li = document.createElement('li');
    li.className = cars.category;
    li.title = cars.description;

    const h3 = document.createElement('h3');
    h3.textContent = cars.name;
    li.appendChild(h3);

    // const img = document.createElement('img');
    // img.src = cars.image;
    // img.alt = cars.name + ' image';
    // li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + cars.price.toFixed(2);
    // const usd = cars.price.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = cars.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderCars;