document.addEventListener('DOMContentLoaded', function() {
    
    const footer = document.createElement('footer');

 
    footer.style.backgroundColor = '#000';
    footer.style.color = '#fff';
    footer.style.padding = '20px';
    footer.style.position = 'relative';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.display = 'flex';
    footer.style.justifyContent = 'center';
    footer.style.alignItems = 'center';

 
    const container = document.createElement('div');
    container.style.textAlign = 'center';

   
    const nikeLogo = document.createElement('img');
    nikeLogo.src = 'https://i.pinimg.com/564x/2b/d2/5a/2bd25a29fc238ec571985e13c7f5647c.jpg'; 
    nikeLogo.alt = 'Logo Nike';
    nikeLogo.style.marginTop = '20px';
    nikeLogo.style.width = '60px';
    nikeLogo.style.height = 'auto';
    nikeLogo.style.marginBottom = '-16px';

  
    const copyright = document.createElement('p');
    copyright.textContent = `© ${new Date().getFullYear()} Nike. Todos los derechos reservados.`;
    copyright.style.fontSize = '14px';
    copyright.style.marginTop = '30px';

 
    container.appendChild(nikeLogo);
    container.appendChild(document.createElement('br'));
    container.appendChild(copyright);

 
    footer.appendChild(container);


    document.body.appendChild(footer);
});