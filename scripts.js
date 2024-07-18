function addToCart(productName, productPrice) {
    const cartItemsContainer = document.getElementById('cart-items');

    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <p>${productName} - $${productPrice}</p>
        <button onclick="removeFromCart(this)">Remove</button>
    `;

    // Append the cart item to the cart items container
    cartItemsContainer.appendChild(cartItem);

    // Show the checkout info section if there are items in the cart
    document.getElementById('checkout-info').style.display = 'block';
}

function removeFromCart(button) {
    const cartItem = button.parentElement;
    cartItem.remove();

    // Hide the checkout info section if the cart is empty
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer.children.length === 0) {
        document.getElementById('checkout-info').style.display = 'none';
    }
}

function submitForm(event) {
    event.preventDefault();

    const shippingOption = document.getElementById('shipping-option').value;
    const shippingCost = shippingOption === 'standard' ? 15 : 30;

    const cartItems = document.getElementsByClassName('cart-item');
    let totalPrice = 0;
    for (let item of cartItems) {
        const price = parseFloat(item.querySelector('p').textContent.split('$')[1]);
        totalPrice += price;
    }

    totalPrice += shippingCost;

    const paymentSummary = document.getElementById('payment-summary');
    paymentSummary.innerHTML = `<p>Total Price: $${totalPrice.toFixed(2)}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Your DOMContentLoaded code here
});
