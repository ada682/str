let isLoggedIn = false;

function toggleProfilePopup() {
    const profilePopup = document.getElementById('profile-popup');
    const profileContent = document.getElementById('profile-content');
    const loginContent = document.getElementById('login-content');
    
    profilePopup.style.display = profilePopup.style.display === 'block' ? 'none' : 'block';

    if (isLoggedIn) {
        profileContent.style.display = 'block';
        loginContent.style.display = 'none';
    } else {
        profileContent.style.display = 'none';
        loginContent.style.display = 'block';
    }
}

function showLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'block';
}

function closeLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'none';
}

function loginWithGoogle() {
    // Implementasi login dengan Google
    isLoggedIn = true;
    closeLoginPopup();
    toggleProfilePopup();
}

function loginWithFacebook() {
    // Implementasi login dengan Facebook
    isLoggedIn = true;
    closeLoginPopup();
    toggleProfilePopup();
}

function logout() {
    isLoggedIn = false;
    toggleProfilePopup();
}

function addToCart(productName, productPrice) {
    const quantityInput = event.target.previousElementSibling;
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity < 1) {
        alert('Please enter a valid quantity');
        return;
    }

    // Animasi menambahkan produk ke keranjang
    const cartIcon = document.querySelector('.cart-icon');
    const productCard = event.target.parentElement;
    const productImage = productCard.querySelector('img').cloneNode();

    productImage.style.position = 'fixed';
    productImage.style.zIndex = 1000;
    productImage.style.top = productCard.getBoundingClientRect().top + 'px';
    productImage.style.left = productCard.getBoundingClientRect().left + 'px';
    productImage.style.transition = 'transform 1s, top 1s, left 1s';

    document.body.appendChild(productImage);

    requestAnimationFrame(() => {
        productImage.style.transform = 'scale(0.1)';
        productImage.style.top = cartIcon.getBoundingClientRect().top + 'px';
        productImage.style.left = cartIcon.getBoundingClientRect().left + 'px';
    });

    productImage.addEventListener('transitionend', () => {
        document.body.removeChild(productImage);
        // Tambahkan produk ke keranjang (implementasi sesuai kebutuhan)
        alert(`${quantity} x ${productName} added to cart`);
    });
}

function showLoginPrompt() {
    if (!isLoggedIn) {
        const loginPopup = document.getElementById('login-popup');
        loginPopup.style.display = 'block';
    } else {
        // Lanjutkan ke pembayaran
        alert('Proceed to checkout');
    }
}

// Fungsi untuk menangani popup video
window.onload = function() {
    const videoPopup = document.getElementById('video-popup');
    const video = document.getElementById('popup-video');
    const closeButton = document.getElementById('close-popup');

    video.play();

    closeButton.onclick = function() {
        videoPopup.style.display = 'none';
        video.pause();
    }
}
