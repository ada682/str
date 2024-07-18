let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} has been added to your cart.`);
    animateAddToCart();
}

function animateAddToCart() {
    const cartButton = document.querySelector('.add-to-cart');
    const cartIcon = document.createElement('div');
    cartIcon.className = 'cart-animation';
    cartButton.appendChild(cartIcon);

    const cartElement = document.getElementById('cart-items');

    const rectButton = cartButton.getBoundingClientRect();
    const rectCart = cartElement.getBoundingClientRect();

    cartIcon.style.transform = `translate(${rectCart.left - rectButton.left}px, ${rectCart.top - rectButton.top}px) scale(0)`;
    cartIcon.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
        cartIcon.remove();
        window.location.href = 'cart.html';
    }, 500);
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
        <p>Subtotal: $${cart.reduce((total, item) =>
