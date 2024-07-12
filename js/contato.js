document.addEventListener("DOMContentLoaded", function() {

    const titulo = document.createElement("h2");
    titulo.textContent = "Contactanos, te responderemos a la brevedad";
    document.querySelector(".containerProduct").appendChild(titulo);

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); 

 
        const nombre = document.getElementById("nombreForm").value.trim();
        const apellido = document.getElementById("apellidoForm").value.trim();
        const telefono = document.getElementById("telForm").value.trim();
        const email = document.getElementById("emailForm").value.trim();
        const mensaje = document.getElementById("textForm").value.trim();


        if (nombre === "" || apellido === "" || telefono === "" || email === "" || mensaje === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor completa todos los campos.',
            });
            return; 
        }


        Swal.fire({
            icon: 'success',
            title: 'Mensaje Enviado',
            text: 'Su mensaje ha sido enviado correctamente.',
            timer: 1000, 
            showConfirmButton: false 
        });

 
        limpiarFormulario();

   
        guardarMensajeLocalStorage(nombre, apellido, telefono, email, mensaje);
    });

    function limpiarFormulario() {
    
        document.getElementById("nombreForm").value = "";
        document.getElementById("apellidoForm").value = "";
        document.getElementById("telForm").value = "";
        document.getElementById("emailForm").value = "";
        document.getElementById("textForm").value = "";
    }

    function guardarMensajeLocalStorage(nombre, apellido, telefono, email, mensaje) {
   
        const mensajeGuardado = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            email: email,
            mensaje: mensaje
        };
        localStorage.setItem('mensajeGuardado', JSON.stringify(mensajeGuardado));
    }
});