document.addEventListener('DOMContentLoaded', function() {

    let cart = loadCartFromLocalStorage();

  
    let subtotalTotal = 0;
    cart.forEach(item => {
        subtotalTotal += item.subTotal;
    });

  
    document.getElementById('subtotal').textContent = subtotalTotal.toFixed(2);
});


document.getElementById('payButton').addEventListener('click', procesarPago);


function procesarPago(event) {
    event.preventDefault();

  
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

   
    let cart = loadCartFromLocalStorage();

  
    let subtotalTotal = 0;
    cart.forEach(item => {
        subtotalTotal += item.subTotal;
    });

  
    document.getElementById('subtotal').textContent = subtotalTotal.toFixed(2);

   
    if (cardNumber && expiryDate && cvv) {
      
        const paymentDetails = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvv: cvv,
            subtotal: subtotalTotal
        };

       
        localStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));

        Swal.fire({
            icon: 'success',
            title: '¡Pago procesado exitosamente!',
            showConfirmButton: false,
            timer: 1500
        });

    } else {
   
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor complete todos los campos para continuar con el pago.',
        });
    }
}


function loadCartFromLocalStorage() {
    const cartString = localStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : [];
}