let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart-items');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartDiv.appendChild(itemDiv);
    });

    const checkoutInfo = document.getElementById('checkout-info');
    if (cart.length > 0) {
        checkoutInfo.style.display = 'block';
    } else {
        checkoutInfo.style.display = 'none';
    }
}

function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(document.getElementById('shipping-form'));
    const shippingOption = formData.get('shipping-option');
    const shippingCost = shippingOption === 'standard' ? 15 : 30;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0) + shippingCost;

    const paymentSummary = document.getElementById('payment-summary');
    paymentSummary.innerHTML = `
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

// Dynamic background hexagons movement
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.hexagon').forEach(hex => {
        const speed = hex.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        hex.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Create and position hexagons
const backgroundDiv = document.getElementById('background');
for (let i = 0; i < 20; i++) {
    const hex = document.createElement('div');
    hex.className = 'hexagon';
    hex.style.left = `${Math.random() * 100}vw`;
    hex.style.top = `${Math.random() * 100}vh`;
    hex.setAttribute('data-speed', Math.random() * 2 + 1);
    backgroundDiv.appendChild(hex);
    hex.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
}
