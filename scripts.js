function showPaymentOptions() {
    const paymentOptions = document.getElementById('payment-options');
    paymentOptions.style.display = paymentOptions.style.display === 'none' ? 'block' : 'none';
}

// Generate moving dots
const background = document.getElementById('background');

function createSatelliteDot() {
    const dot = document.createElement('div');
    dot.classList.add('satellite-dot');
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = `${Math.random() * 100}vh`;
    background.appendChild(dot);

    dot.addEventListener('animationend', () => {
        dot.remove();
        createSatelliteDot();
    });
}

for (let i = 0; i < 50; i++) {
    createSatelliteDot();
}
