
let cart = [];
let products = []; 


const apiUrl = 'https://fakestoreapi.com/products';


async function loadProductsFromApi() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error al cargar los productos');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}


function addToCart(productId, quantity, size) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log("No se encontró el producto");
        return;
    }
    const cartItem = cart.find(item => item.id === productId && item.size === size);
    if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.subTotal = cartItem.quantity * cartItem.price;
    } else {
        cart.push({
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: quantity,
            size: size,
            subTotal: quantity * product.price
        });
    }
    saveCartToLocalStorage();
    renderCart();
    updateGlobalSubtotal(); 
}


function renderProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');


        const carouselContainer = document.createElement('div');
        carouselContainer.classList.add('product-image');

        const carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel-inner');


        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        carouselItem.classList.add('active'); 

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.title;

        carouselItem.appendChild(productImg);
        carouselInner.appendChild(carouselItem);

        carouselContainer.appendChild(carouselInner);
        productDiv.appendChild(carouselContainer);


        const productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.textContent = product.title;
        productDiv.appendChild(productName);


        const productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.textContent = `Precio: $${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);


        const productSizes = document.createElement('div');
        productSizes.classList.add('product-sizes');
        productSizes.textContent = 'Talle único';


        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('addToCart');
        addToCartButton.textContent = 'Agregar al carrito';
        addToCartButton.addEventListener('click', () => {
            addToCart(product.id, 1, 'único');
        });
        productSizes.appendChild(addToCartButton);

        productDiv.appendChild(productSizes);


        productContainer.appendChild(productDiv);
    });
}


function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = "";

    if (cart.length === 0) {
        cartElement.textContent = 'El carrito está vacío.';
    } else {
 
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            const itemInfo = document.createElement('div');
            itemInfo.classList.add('cart-item-info');


            const itemName = document.createElement('div');
            itemName.classList.add('cart-item-name');
            itemName.textContent = item.name;
            itemInfo.appendChild(itemName);


            const itemQuantity = document.createElement('div');
            itemQuantity.classList.add('cart-item-quantity');
            itemQuantity.textContent = `Cantidad: ${item.quantity}`;
            itemInfo.appendChild(itemQuantity);

            cartItem.appendChild(itemInfo);


            const itemSubtotal = document.createElement('div');
            itemSubtotal.classList.add('cart-item-subtotal');
            itemSubtotal.textContent = `$${item.subTotal.toFixed(2)}`;
            cartItem.appendChild(itemSubtotal);

            cartElement.appendChild(cartItem);
        });


        const cartTotal = document.createElement('div');
        cartTotal.classList.add('cart-total');
        const total = cart.reduce((acc, item) => acc + item.subTotal, 0);
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        cartElement.appendChild(cartTotal);


        const clearCartButton = document.createElement('button');
        clearCartButton.classList.add('clear-cart-button');
        clearCartButton.textContent = 'Vaciar Carrito';
        clearCartButton.addEventListener('click', () => {
            cart = [];
            saveCartToLocalStorage();
            renderCart();
            updateGlobalSubtotal();
        });
        cartElement.appendChild(clearCartButton);
    }
}


function loadCartFromLocalStorage() {
    const cartString = localStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : [];
}


function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


document.addEventListener('DOMContentLoaded', async () => {

    products = await loadProductsFromApi();
    renderProducts();
    cart = loadCartFromLocalStorage();
    renderCart();
});


function getGlobalSubtotal() {
    return cart.reduce((total, item) => total + item.subTotal, 0);
}


function updateGlobalSubtotal() {
    const subtotal = getGlobalSubtotal();


    const subtotalChangeEvent = new CustomEvent('subtotalUpdated', { detail: subtotal });
    document.dispatchEvent(subtotalChangeEvent);
}