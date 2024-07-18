let cart = [];

function addToCart(productName, price) {
    // Add product to cart array
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Create a clone of the cart animation element
    const cartAnimation = document.createElement('div');
    cartAnimation.id = 'cart-animation';
    cartAnimation.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="Cart">';

    // Append the animation element to the body
    document.body.appendChild(cartAnimation);

    // Get the position of the button
    const button = event.target;
    const buttonRect = button.getBoundingClientRect();

    // Set the initial position of the animation element
    cartAnimation.style.left = `${buttonRect.left}px`;
    cartAnimation.style.top = `${buttonRect.top}px`;
    cartAnimation.style.display = 'flex';

    // Get the position of the cart link
    const cartLink = document.getElementById('cart-link');
    const cartRect = cartLink.getBoundingClientRect();

    // Animate the element to the cart link
    cartAnimation.animate([
        { transform: `translate(0, 0)` },
        { transform: `translate(${cartRect.left - buttonRect.left}px, ${cartRect.top - buttonRect.top}px)` }
    ], {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
    }).onfinish = () => {
        // Remove the animation element after animation is done
        cartAnimation.remove();
    };
}

// Populate cart items on cart.html
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItems = document.getElementById('cart-items');
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });
    }
});

// Handle checkout
document.getElementById('checkout-button')?.addEventListener('click', () => {
    window.location.href = 'checkout.html';
});

document.getElementById('checkout-form')?.addEventListener('submit', event => {
    event.preventDefault();
    // Handle form submission
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
});
