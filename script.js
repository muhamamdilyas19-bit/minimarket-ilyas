// daftar produk dengan gambar 
const products = [
    { id: 1, name: 'beng-beng', price: 2000, img:'img/bb.jpg' },
    { id: 2, name: 'boncape', price: 1000, img: 'img/bpn.jpg' },
    { id: 3, name: 'chocopie', price: 2000, img: 'img.cc.jpg' },
    { id: 4, name: 'MAXIOORN', price: 20000, img: 'img/max.jpg' },
    { id: 5, name: 'QTELA', price: 20000, img: 'img/qt.jpg' },
    { id: 6, name: 'battleship', price: 10000000, img: 'imag/bat.jpg'} 
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