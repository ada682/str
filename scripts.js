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
    });

    // Remove the animation element after the animation is complete
    setTimeout(() => {
        document.body.removeChild(cartAnimation);
    }, 1000);

    console.log(`Added ${productName} to cart for $${price}`);
}

document.addEventListener('DOMContentLoaded', function() {
    // Load cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        cart = storedCart;
        updateCartDisplay();
    }

    // Add event listener to checkout button
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            window.location.href = 'checkout.html';
        });
    }

    // Add event listener to live chat
    document.getElementById('live-chat').addEventListener('click', function() {
        alert('Live chat clicked!');
    });

    // Add event listener to checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Order placed successfully!');
            localStorage.removeItem('cart');
            window.location.href = 'products.html';
        });
    }
});

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(listItem);
        });
    }
}
