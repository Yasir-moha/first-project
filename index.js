// Add event listeners to the buttons with the class 'change'
document.querySelectorAll('.change').forEach(button => {
    button.addEventListener('click', function () {
        if (button.innerText === "Shop-now") {
            alert("Visit our store to explore a wide range of products!");
            alert("dont miss the chance to shop with us not forgetting {mapema ndio best}!");
        } else if (button.innerText === "Make order") {
            alert("Place your order now to enjoy fast and reliable service!");
            alert("You can make your order through our new website or you can also contact us using the contact form.");
        } else if (button.innerText === "Deliveries") {
            alert("We offer shipping on all orders within the country!");
            alert("We deliver to our customers' doorstep without having to choose.");
        }
    });
});
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function () {
        if (button.innerText === "services") {
            alert("We offer a wide range of services to our customers. We tend to provide our customers with special services unlike others. Here we don't judge either poor or rich!");
        } else if (button.innerText === "payment method") {
            alert("Here at Dubai shopping, we have decided not to be specific with the payment method. We let our customers choose what they like, either using cash, paying using their phones, or even cards!");
        } else if (button.innerText === "transparency") {
            alert("Transparency is one of our core values here at our shopping centre. We believe in providing clear and honest information to our customers. Here at Dubai shopping we give details of our merchant to our customers incase they want to be notified and not to fall i some kind of traps of conmen");
        } else if (button.innerText === "discipline") {
            alert("We maintain discipline in our operations to ensure smooth and efficient services to our customers. We also have a policy to ensure that some unserious people ordering items online jokingly are also not forgotten; we punish them by fining them according to the goods they order.");
        }
    });
});

// Function to handle search functionality
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('#myshop li');

    items.forEach(item => {
        const name = item.querySelector('h4').textContent.toLowerCase();
        const description = item.querySelectorAll('p')[1].textContent.toLowerCase();
        const shouldShow = name.includes(filter) || description.includes(filter);
        item.style.display = shouldShow ? 'block' : 'none';
    });
}


document.getElementById('searchInput').addEventListener('input', handleSearch);




// Function to display each good
function displayGood(good) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <img src="${good.image}" width="350px">
        <h4>${good.name}</h4>
        <p>${good.description}</p>
        <p>${good.price}</p>
        <p>sales-person: ${good.merchant}</p>
        <p>id-number: ${good.idnumber}</p>
        <button class="buy-button">Buy</button> 
        <button class="order-button">Order</button>
    `;
    document.getElementById('myshop').appendChild(listItem);
}

// Fetching goods data from my db.json
function fetchGoods() {
    fetch('http://localhost:3000/GOODS')
        .then(response => response.json())
        .then(data => data.forEach(good => displayGood(good)))
        .catch(error => console.error('Error fetching goods:', error));
}
fetchGoods();
document.getElementById('myshop').addEventListener('click', function (event) {
    if (event.target.classList.contains('buy-button')) {
        event.target.textContent = event.target.textContent === 'Bought' ? 'Buy' : 'Bought';
    } else if (event.target.classList.contains('order-button')) {
        event.target.textContent = event.target.textContent === 'Ordered' ? 'Order' : 'Ordered';
    }
});