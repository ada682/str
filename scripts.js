let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartDiv.appendChild(itemDiv);
    });
}

function submitForm(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(document.getElementById('checkout-form'));
    const shippingOption = formData.get('shipping-option');
    const shippingCost = shippingOption === 'standard' ? 15 : 30;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0) + shippingCost;

    // Display payment summary
    const paymentSummary = document.getElementById('payment-summary');
    paymentSummary.innerHTML = `
        <h3>Order Summary</h3>
        <ul>
            ${cart.map(item => `<li>${item.product} - $${item.price.toFixed(2)}</li>`).join('')}
        </ul>
        <p>Shipping: ${shippingOption} - $${shippingCost.toFixed(2)}</p>
        <h4>Total: $${totalPrice.toFixed(2)}</h4>
        <button onclick="processPayment()">Proceed to Payment</button>
    `;
}

function processPayment() {
    alert('Redirecting to payment gateway...');
    // Implement payment processing logic here
}

document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.hexagon').forEach(hexagon => {
        const speed = 0.05;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        hexagon.style.transform = `translate(${x}px, ${y}px)`;
    });
});
