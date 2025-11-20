// DARK MODE TOGGLE
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
});

// KERANJANG
let cartCount = 0;
let cartTotal = 0;

const cartCountDisplay = document.getElementById('cartCount');
const cartTotalDisplay = document.getElementById('cartTotal');

// ambil semua tombol beli
const buyButtons = document.querySelectorAll('.btn-buy');

// event pada setiap tombol
buyButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
        const priceText = this.previousElementSibling.textContent.replace(/[^\d]/g, '');
        const price = parseInt(priceText);

        cartCount++;
        cartTotal += price;

        cartCountDisplay.textContent = cartCount;
        cartTotalDisplay.textContent = "Rp " + cartTotal.toLocaleString();
    });
});
