// Daftar produk dengan gambar
const products = [
    { id: 1, name: 'BISKUAT', price: 1000, img: 'biskuat.jpg' },
    { id: 2, name: 'MILKUAT', price: 2000, img: 'milkuat.jpg' },
    { id: 3, name: 'MILO', price: 2000, img: 'milo.jpg' },
    { id: 4, name: 'NABATI', price: 2000, img: 'nabati.png' },
    { id: 5, name: 'SOSRO', price: 3000, img: 'sosro.jpg' },
    { id: 6, name: 'TICTAC', price: 1000, img: 'tictac.jpg' },
];

// keranjang belanja
let cart = [];

// tampilkan produk
function displayproducts() {

    const productscontainer =
        document.getElementById('products');

    products.forEach(product => {

        const productsdiv =
            document.createElement('div');

        productsdiv.classList.add('product');

        productsdiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price}</p>

            <button onclick="addTocart(${product.id})">
                Tambah ke Keranjang
            </button>
        `;

        productscontainer.appendChild(productsdiv);
    });
}

// tambah ke keranjang
function addTocart(productid) {

    const product =
        products.find(p => p.id === productid);

    const cartitem =
        cart.find(item => item.id === productid);

    if (cartitem) {

        cartitem.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updatecart();
}

// update keranjang
function updatecart() {

    const cartitemcontainer =
        document.getElementById('cart-items');

    cartitemcontainer.innerHTML = '';

    let totalprice = 0;

    cart.forEach(item => {

        const listitem =
            document.createElement('li');

        listitem.textContent =
            `${item.name} x ${item.quantity} - Rp ${item.price * item.quantity}`;

        cartitemcontainer.appendChild(listitem);

        totalprice += item.price * item.quantity;

    });

    document.getElementById('total-price')
        .textContent = totalprice;
}

// checkout
function checkout() {

    if (cart.length === 0) {

        alert('Keranjang anda kosong.');
        return;
    }

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    const payment = parseInt(
        prompt(
            `Total belanja anda Rp ${total}\nMasukkan jumlah pembayaran:`
        )
    );

    if (payment >= total) {

        alert(
            `Pembayaran berhasil!\nKembalian anda: Rp ${payment - total}`
        );

        cart = [];

        updatecart();

    } else {

        alert('Uang Anda tidak mencukupi.');

    }
}

// tombol checkout
document
    .getElementById('checkout-btn')
    .addEventListener('click', checkout);

// tampilkan produk
displayproducts();
