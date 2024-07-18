function addToCart(productName, price) {
    // Create a clone of the cart animation element
    const cartAnimation = document.createElement('div');
    cartAnimation.id = 'cart-animation';
    cartAnimation.innerHTML = '<img src="cart-icon.png" alt="Cart">';

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
    });

    // Remove the animation element after the animation is complete
    setTimeout(() => {
        document.body.removeChild(cartAnimation);
    }, 1000);

    // Add your cart handling logic here
    console.log(`Added ${productName} to cart for $${price}`);
}

// Live chat handling (if needed)
document.getElementById('live-chat').addEventListener('click', function() {
    alert('Live chat clicked!');
});
