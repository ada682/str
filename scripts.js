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
