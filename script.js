// daftar produk dengan gambar 
const products = [
   { id: 1, name: 'BISKUAT', price: 1000, img: 'biskuat.jpg' },
    { id: 2, name: 'MILKUAT', price: 2000, img: 'milkuat.jpg' },
    { id: 3, name: 'MILO', price: 2000, img: 'milo.jpg' },
    { id: 4, name: 'NABATI', price: 2000, img: 'nabati.png' },
    { id: 5, name: 'SOSRO', price: 3000, img: 'sosro.jpg' },
    { id: 6, name: 'TICTAC', price: 1000, img: 'tictac.jpg' }, 
]

// keranjang belanja
let cart = [];

// fungsi untuk menampilkan daftar produk
function displayproducts(){
    const productscontainer = document.getElementById( 'produtcs' );
    products.forEach(products => {
        const productdiv = document.createElement('div');
        productdiv.classList.add('product');
        productdiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price}</p>
            <button onclick="addtocart(${product.id})">tambah ke keranjang<
            `;
            productscontainer.appendChild(productdiv);
    });
}

// fungsi untuk menambah produk ke keranjang belanja
function addtocart(productid) [
    const product = products.find(p => p.id === productid);
    const product = cart.find(item => item.id === productid);

    if (CartItem) {
        CartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1})
    }

    updatecart();
]

// fungsi untuk menampilkan isi keranjang belanja
