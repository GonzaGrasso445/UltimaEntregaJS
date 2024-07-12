

const products = [
    { id: 1, name: "Air Jordan 1 Low OG WhiteRed", price: 259999, imageUrls:[ "https://nikearprod.vtexassets.com/arquivos/ids/792655-1000-1000?v=638379206231170000&width=1000&height=1000&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/795791-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/797123-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/800235-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/803353-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/804650-1200-1200?width=1200&height=1200&aspect=true"], description:"Descubre el legado reinventado con las Air Jordan 1 Low OG WhiteRed, un ícono atemporal que fusiona estilo y rendimiento. Con su diseño clásico en blanco y rojo, estas zapatillas ofrecen confort supremo y un look que nunca pasa de moda. Ideal para destacar en la calle o en la cancha, son la elección perfecta para los amantes del estilo retro con un toque moderno. Eleva tu juego con cada paso y haz de las Air Jordan 1 Low OG WhiteRed tu declaración de estilo definitiva." },
    { id: 2, name: "Air Jordan 1 High 85", price: 379999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/912983-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/913131-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/913279-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/913427-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/913575-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/913723-1200-1200?width=1200&height=1200&aspect=true"],  description: "Revive la icónica silueta de los años 80 con las Air Jordan 1 High 85. Este modelo celebra el legado del baloncesto con un diseño auténtico y materiales premium. Disponible en varios colores para combinar con tu estilo, estas zapatillas ofrecen comodidad y estilo sin igual. Haz clic para ver más detalles y elige tu par hoy mismo." },
    { id: 3, name: "PSG Jumpman MVP", price: 289999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/846316-1000-1000?v=638388504225700000&width=1000&height=1000&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/849461-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/852200-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/854855-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/857205-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/859211-1200-1200?width=1200&height=1200&aspect=true"],description: "Vive la pasión por el basquet con las PSG JUMPMAN MVP, una colaboración única que combina el estilo distintivo de Paris Saint-Germain con el legado del Jumpman de Jordan. Diseñadas para rendir homenaje al espíritu competitivo y al dinamismo del basquet moderno, estas zapatillas ofrecen comodidad y rendimiento supremos. Descubre más detalles y añádelas a tu colección ahora mismo." },
    { id: 4, name: "Air Jordan 1 Mid ", price: 259999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/793688-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/801259-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/805631-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/971029-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/971030-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/971031-1200-1200?width=1200&height=1200&aspect=true"],description:"La Air Jordan 1 Mid es una de las siluetas más icónicas y reconocidas en el mundo de las zapatillas. Esta versión de media altura mantiene el estilo clásico de la original Air Jordan 1, con un diseño elegante y versátil que se adapta tanto a la cancha como a la calle. Fabricada con materiales de alta calidad, la Air Jordan 1 Mid ofrece una combinación perfecta de comodidad y durabilidad." },
    { id: 5, name: "Air Joran 1 Royal Reimagined", price: 349999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/794788-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/802359-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/806731-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/971032-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/971033-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/971035-1200-1200?width=1200&height=1200&aspect=true"],description:"La Air Jordan 1 Royal Reimagined ofrece un giro moderno a un clásico atemporal. Con su combinación icónica de negro y azul royal, estas zapatillas destacan por su estilo audaz y versátil. Fabricadas con materiales de alta calidad, brindan comodidad y durabilidad, mientras que la suela de goma garantiza una tracción excelente. Perfectas para el día a día y para quienes buscan un look urbano con un toque de elegancia." },
    { id: 6, name: "Air Jordan 4 Retro Red Cement", price: 229999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/730756-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/732759-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/749443-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/751408-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/753359-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/755268-1200-1200?width=1200&height=1200&aspect=true"],description:"La Air Jordan 4 Retro Red Cement combina un diseño clásico con un toque audaz de color rojo cemento. Estas zapatillas destacan por su estilo icónico y construcción robusta. Fabricadas con materiales premium, ofrecen comodidad y durabilidad, mientras que la suela de goma asegura una tracción superior. Perfectas para quienes buscan un look atrevido y contemporáneo, ideal tanto para la cancha como para el día a día." },
    { id: 7, name: "Air Jordan 1 Low", price: 209999, imageUrls:[ "https://nikearprod.vtexassets.com/arquivos/ids/844395-1000-1000?v=638388472425370000&width=1000&height=1000&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/846879-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/847268-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/847576-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/849998-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/850341-1200-1200?width=1200&height=1200&aspect=true"],description:"La Air Jordan 1 Low es una versión elegante y versátil del icónico modelo original. Estas zapatillas bajas combinan estilo y comodidad, siendo perfectas para el uso diario. Confeccionadas con materiales de alta calidad, ofrecen durabilidad y un ajuste perfecto. Su suela de goma proporciona excelente tracción, mientras que el diseño clásico y los detalles distintivos garantizan un look atemporal y moderno." },
    { id: 8, name: "Jordan Stay Loyal 3", price: 209999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/877846-1000-1000?v=638467283058530000&width=1000&height=1000&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/733222-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/749905-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/751869-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/753817-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/755724-1200-1200?width=1200&height=1200&aspect=true"],description:"La Jordan Stay Loyal 3 combina rendimiento y estilo en una zapatilla moderna. Diseñadas para ofrecer comodidad y soporte, estas zapatillas son ideales tanto para el deporte como para el uso diario. Con una construcción robusta y materiales de alta calidad, garantizan durabilidad y un ajuste seguro. Su suela de goma proporciona excelente tracción, mientras que el diseño contemporáneo asegura un look fresco y versátil para cualquier ocasión." },
    { id: 9, name: "Nike Air Force 1 Low Retro Color Of The Month", price: 209999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/732281-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/734264-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/750942-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/752908-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/754829-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/756697-1200-1200?width=1200&height=1200&aspect=true"],description:"La Nike Air Force 1 Low Retro Color Of The Month celebra un clásico con un toque de color fresco. Estas zapatillas, reconocidas por su diseño icónico y su comodidad, están confeccionadas con materiales de alta calidad para una durabilidad superior. Su suela de goma proporciona excelente tracción, mientras que el estilo atemporal y los detalles vibrantes las convierten en una opción perfecta para cualquier ocasión." },
    { id: 10, name: "Nike Air Force 1 07", price: 229999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/658789-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/664006-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/666613-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/669208-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/671775-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/673439-1200-1200?width=1200&height=1200&aspect=true"],description:"La Nike Air Force 1 '07 ofrece un estilo icónico con un toque moderno. Fabricadas con materiales de alta calidad, estas zapatillas brindan comodidad y durabilidad. La suela de goma asegura una tracción excepcional, mientras que su diseño clásico y detalles distintivos las convierten en una elección perfecta para cualquier ocasión, tanto casual como deportiva." },
    { id: 11, name: "Air Jordan  Mid 1 ", price: 229999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/731270-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/733274-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/749957-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/751921-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/755776-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/753869-1200-1200?width=1200&height=1200&aspect=true"],description:"La Air Jordan 1 Mid combina el diseño icónico del modelo original con una altura media que ofrece un ajuste versátil y cómodo. Confeccionadas con materiales premium, estas zapatillas aseguran durabilidad y estilo. La suela de goma proporciona excelente tracción, mientras que los detalles clásicos, como el logotipo de Jordan y el Swoosh de Nike, completan su look atemporal. Perfectas para cualquier ocasión, estas zapatillas son una elección esencial para los amantes del estilo urbano y deportivo." },
    { id: 12, name: "Air Jordan 1 Element", price: 359999, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/907728-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/908054-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/908367-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/908680-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/908999-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/909311-1200-1200?width=1200&height=1200&aspect=true"],description:"La Air Jordan 1 Element fusiona el diseño clásico con innovaciones modernas para ofrecer una zapatilla versátil y resistente. Fabricadas con materiales de alta calidad y detalles impermeables, estas zapatillas son perfectas para cualquier clima. Su suela de goma asegura una tracción excelente, mientras que el diseño icónico y los detalles distintivos garantizan un estilo atemporal. Ideales para quienes buscan combinar moda y funcionalidad en su calzado diario." },
    { id: 13, name: "Nike Air Force1 07 LV8", price: 240000, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/811591-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/817483-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/822538-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/827292-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/831215-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/834511-1200-1200?width=1200&height=1200&aspect=true"],description:"La Nike Air Force 1 '07 LV8 eleva el clásico diseño de las Air Force 1 con detalles premium y un estilo moderno. Fabricadas con materiales de alta calidad, estas zapatillas ofrecen comodidad y durabilidad superiores. La suela de goma garantiza una tracción excelente, mientras que los detalles actualizados y el icónico diseño hacen de estas zapatillas una elección perfecta para destacar en cualquier ocasión." },
    { id: 14, name: "Nike Air Force1 07 LX", price: 270000, imageUrls:[ "https://nikearprod.vtexassets.com/arquivos/ids/845663-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/848814-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/851553-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/854208-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/856575-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/858608-1200-1200?width=1200&height=1200&aspect=true"],description:"La Air Jordan 1 Low es una versión elegante y versátil del icónico modelo original. Estas zapatillas bajas combinan estilo y comodidad, siendo perfectas para el uso diario. Confeccionadas con materiales de alta calidad, ofrecen durabilidad y un ajuste perfecto. Su suela de goma proporciona excelente tracción, mientras que el diseño clásico y los detalles distintivos garantizan un look atemporal y moderno." },
    { id: 15, name: "Nike Air Force 1 Mid '07 LX", price: 209000, imageUrls: ["https://nikearprod.vtexassets.com/arquivos/ids/531700-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/537814-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/542855-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/548922-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/554987-1200-1200?width=1200&height=1200&aspect=true","https://nikearprod.vtexassets.com/arquivos/ids/560532-1200-1200?width=1200&height=1200&aspect=true"],description:"La Air Jordan 1 Element fusiona el diseño clásico con innovaciones modernas para ofrecer una zapatilla versátil y resistente. Fabricadas con materiales de alta calidad y detalles impermeables, estas zapatillas son perfectas para cualquier clima. Su suela de goma asegura una tracción excelente, mientras que el diseño icónico y los detalles distintivos garantizan un estilo atemporal. Ideales para quienes buscan combinar moda y funcionalidad en su calzado diario." },

];


let cart = loadCartFromLocalStorage();

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
            name: product.name,
            price: product.price,
            quantity: quantity,
            size: size,
            subTotal: quantity * product.price
        });
    }
    saveCartToLocalStorage();
    renderCart();
}


function renderProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Imágenes del producto en carrusel
        const carouselContainer = document.createElement('div');
        carouselContainer.classList.add('product-image');

        const carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel-inner');

        product.imageUrls.forEach((imageUrl, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const productImg = document.createElement('img');
            productImg.src = imageUrl;
            productImg.alt = product.name;

            carouselItem.appendChild(productImg);
            carouselInner.appendChild(carouselItem);
        });

        carouselContainer.appendChild(carouselInner);
        productDiv.appendChild(carouselContainer);

        // Nombre del producto
        const productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        // Precio del producto
        const productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.textContent = `Precio: $${product.price}`;
        productDiv.appendChild(productPrice);

        // Tamaños disponibles
        const productSizes = document.createElement('div');
        productSizes.classList.add('product-sizes');
        productSizes.textContent = 'Talles: ';

        const sizeButtons = [];
        for (let size = 7; size <= 15; size++) {
            const sizeButton = document.createElement('button');
            sizeButton.classList.add('product-size');
            sizeButton.textContent = size;
            sizeButton.addEventListener('click', () => {
                addToCart(product.id, 1, size);
            });
            sizeButtons.push(sizeButton);
            productSizes.appendChild(sizeButton);
        }

        productDiv.appendChild(productSizes);


        const productButtons = document.createElement('div');
        productButtons.classList.add('product-buttons');

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('addToCart');
        addToCartButton.textContent = 'Agregar al carrito';
        addToCartButton.addEventListener('click', () => {
            const selectedSize = sizeButtons.find(button => button.classList.contains('selected'));
            if (selectedSize) {
                addToCart(product.id, 1, parseInt(selectedSize.textContent));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Por favor, selecciona un talle antes de agregar al carrito.'
                });
            }
        });
        productButtons.appendChild(addToCartButton);

        const viewDetailsButton = document.createElement('button');
        viewDetailsButton.classList.add('viewDetails');
        viewDetailsButton.textContent = 'Ver más detalles';
        viewDetailsButton.addEventListener('click', () => {
            Swal.fire({
                title: product.name,
                text: product.description,
                icon: 'info',
                confirmButtonText: 'Entendido'
            });
        });
        productButtons.appendChild(viewDetailsButton);

        productDiv.appendChild(productButtons);


        productContainer.appendChild(productDiv);
    });
}
renderProducts();

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


document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    cart = loadCartFromLocalStorage();
    renderCart();
});

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartString = localStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    cart = loadCartFromLocalStorage();
    renderCart();
});







