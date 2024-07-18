let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} has been added to your cart.`);
    window.location.href = 'cart.html';
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItem);
    });

    if (cart.length > 0) {
        document.getElementById('checkout-info').style.display = 'block';
    } else {
        document.getElementById('checkout-info').style.display = 'none';
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function submitForm(event) {
    event.preventDefault();

    const shippingOption = document.getElementById('shipping-option').value;
    const shippingCost = shippingOption === 'standard' ? 15 : 30;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0) + shippingCost;

    document.getElementById('payment-summary').innerHTML = `
        <h4>Payment Summary</h4>
        <p>Subtotal: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        <p>Shipping: $${shippingCost.toFixed(2)}</p>
        <p>Total: $${totalPrice.toFixed(2)}</p>
        <button onclick="completePurchase()">Complete Purchase</button>
    `;
}

function completePurchase() {
    alert('Thank you for your purchase!');
    cart = [];
    displayCart();
    document.getElementById('shipping-form').reset();
    document.getElementById('checkout-info').style.display = 'none';
    document.getElementById('payment-summary').innerHTML = '';
}

// Dynamic background triangles movement
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.triangle').forEach(triangle => {
        const speed = triangle.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        triangle.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Create and position triangles
const backgroundDiv = document.getElementById('background');
for (let i = 0; i < 20; i++) {
    const triangle = document.createElement('div');
    triangle.className = 'triangle';
    triangle.style.left = `${Math.random() * 100}vw`;
    triangle.style.top = `${Math.random() * 100}vh`;
    triangle.setAttribute('data-speed', Math.random() * 2 + 1);
    backgroundDiv.appendChild(triangle);
    triangle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
}

if (window.location.pathname.endsWith('cart.html')) {
    displayCart();
}
