
function mostrarMensaje() {
    Swal.fire({
        title: 'Información de Productos',
        html: `
            <p>Los siguientes son los productos que disponemos.</p>
            <p>Los demás se encuentran agotados o no disponibles.</p>
            <p>Disculpe las molestias.</p>
        `,
        icon: 'info',
        confirmButtonText: 'Entendido',
        customClass: {
            container: 'my-swal-container', 
        },
        background: '#fff' 
    });
}


const navContainer = document.createElement('nav');
navContainer.classList.add('navbar');
document.body.appendChild(navContainer);


const navLogo = document.createElement('a');
navLogo.href = '#';
navLogo.classList.add('navbar-logo');


const nikeLogo = document.createElement('img');
nikeLogo.src = 'https://i.pinimg.com/564x/2b/d2/5a/2bd25a29fc238ec571985e13c7f5647c.jpg'; 
nikeLogo.alt = 'Nike Logo';
nikeLogo.classList.add('logo-image');
navLogo.appendChild(nikeLogo);
navContainer.appendChild(navLogo);


const navMenu = document.createElement('ul');
navMenu.classList.add('navbar-menu');


const menuItems = [
    { text: 'Zapatillas', link: 'buy.html' },
    { text: 'Otros Asociados', link: 'asociados.html' },
    { text: 'Pagos', link: 'payment.html' },
    { text: 'Contacto', link: 'contacts.html' }
];


menuItems.forEach(item => {
    const menuItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.href = item.link;
    menuLink.textContent = item.text;
    menuItem.appendChild(menuLink);
    navMenu.appendChild(menuItem);
});

navContainer.appendChild(navMenu);


const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

o
const viewDetailsButton = document.createElement('button');
viewDetailsButton.textContent = 'Más Información';
viewDetailsButton.style.marginRight = "40px";
viewDetailsButton.classList.add('ver-detalles-button');
viewDetailsButton.addEventListener('click', mostrarMensaje);

buttonContainer.appendChild(viewDetailsButton);
navContainer.appendChild(buttonContainer);