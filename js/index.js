const principalBody = document.body
principalBody.style.backgroundColor= "beige";

//Create principal Contenedor
const principalDiv = document.getElementsByClassName("container");


// Create navegation Element
const principalHeader = document.getElementById('header');
const navegation = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

//Nesting
principalHeader.appendChild(navegation);
navegation.appendChild(nav);
nav.appendChild(ul);
navegation.className ="navbar";

const links =["Nike","AirJordan","Contacts"];

for( const link of links){
   const li = document.createElement('li');
   li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
   ul.appendChild(li);
}



let numeroTarjeta 
let numeroRefPago
let fechaVencimiento



class miTiendaOnline {
   constructor(){
       this.zapatillas =[];
       this.clientes =[];
       this.metodosPago =[];
       

   }
   agregarZapatillas(marca,talle,colores,precio,cantidad){
       this.zapatillas.push({marca,talle,colores,precio,cantidad});
   }
   agregarCliente(nombre,email,direccion){
       this.clientes.push({nombre,email,direccion});

   }
   agregarMetodoPago(metodo){
       this.metodosPago.push({metodo});

   }

   realizarVenta(marcaZapatillas,talleZapatillas,colorZapatillas,precioZapatillas,cantidadZapatillas,nombreCliente){
       const zapatilla = this.zapatillas.find((zapatilla)=>zapatilla.marca === marcaZapatillas);
       const talles = this.zapatillas.find((zapatilla)=>zapatilla.marca === marcaZapatillas && zapatilla.talle ===talleZapatillas);
       const color = this.zapatillas.find((zapatilla)=>zapatilla.colores ===colorZapatillas);
       const precio = this.zapatillas.find((zapatilla)=>zapatilla.precio ===precioZapatillas);
       const cliente = this.clientes.find((cliente)=>cliente.nombre===nombreCliente);
       if (zapatilla && talles && color && precio && cliente && zapatilla.cantidad >=cantidadZapatillas ){
           zapatilla.cantidad -= cantidadZapatillas;
           this.enviarConfirmacionCorreo(cliente.email,cantidadZapatillas,nombreCliente,precioZapatillas,marcaZapatillas,zapatilla.cantidad);
               console.log("Comunicado al Area Comercial: se Ejecuto la venta de " + cantidadZapatillas + " zapatillas de la marca " + marcaZapatillas + " por parte del cliente " + nombreCliente + " con precio $ " + precioZapatillas + ", sumando  un total de $ " + (precioZapatillas * cantidadZapatillas) + ", la confirmacion de esta venta se realizara al correo electronico  :" + cliente.email + ", quedan en stock " + (zapatilla.cantidad) + " zapatillas de estas caracteristicas")
      
       }
       else{
           console.log("No se puede realizar la venta , ya que no contamos con productos con las opciones ingresadas");
       }

   }
   enviarConfirmacionCorreo(email){
       console.log("Se envio un correo electronico a " + email + " para confirmar la compra efectuada " )
   }
   determinarStock(marca, talle, colores) {
       const stock = this.zapatillas.filter(zapatilla =>
           zapatilla.marca === marca &&
           zapatilla.talle === talle &&
           zapatilla.colores === colores
       );

       if (stock.length > 0) {
           let cantidadDisponible = stock.reduce((total, zapatilla) => total + zapatilla.cantidad, 0);
           console.log("Stock disponible de " + marca + " talle " + talle + " y colores " + colores + " es de " +(cantidadDisponible) + " unidades.");
           return cantidadDisponible;
       } else {
           console.log("No hay stock de zapatillas de la marca" + marca + "con talle" +talle+ "y colores" + colores);
           return 0;
       }
   }




   
   EjecutarPago(metodoIngresado, precioZapatillas, cantidadZapatillas) {
       const metodoPago = this.metodosPago.find(metodoPago => metodoPago.metodo === metodoIngresado);
       if (metodoPago) {
           console.log("El método de pago ingresado es correcto, procederemos a ejecutar el pago");
           if (metodoIngresado === "Aplicacion" || metodoIngresado === "Efectivo" || metodoIngresado === "Debito") {
               console.log("El monto a pagar es $ " + (precioZapatillas * cantidadZapatillas));
           } else if (metodoIngresado === "Credito") {
               let numeroTarjeta = prompt("Ingrese los 16 números de la tarjeta de crédito");
               while (numeroTarjeta.length !== 16) {
                   numeroTarjeta = prompt("Ingrese los 16 números de la tarjeta de crédito correctamente");
               }

               let numeroRefPago = prompt("Ingrese los 3 números del código de seguridad que se encuentran al reverso de la tarjeta");
               while (numeroRefPago.length !== 3) {
                   numeroRefPago = prompt("Ingrese los 3 números de la tarjeta de crédito, que se encuentran al reverso de la misma correctamente");
               }

               let fechaVencimiento = prompt("Ingrese la fecha de vencimiento ingresando 2 dígitos para el mes y dos dígitos para el año");
               while (fechaVencimiento.length !== 4) {
                   fechaVencimiento = prompt("Ingrese la fecha de vencimiento ingresando 2 dígitos para el mes y dos dígitos para el año correctamente");
               }
             

               let cuotas = prompt("Ingrese la cantidad de cuotas siendo el interés de estas 3 cuotas 10% de interés, 6 cuotas 20% de interés y 12 cuotas 70% de interés");
               if (cuotas === "3") {
                   console.log("El importe a pagar es $ " + (precioZapatillas * cantidadZapatillas * 1.10) + " con la tarjeta numero " + numeroTarjeta );
                   console.log("Gracias por su compra");
               } else if (cuotas === "6") {
                   console.log("El importe a pagar es $ " + (precioZapatillas * cantidadZapatillas * 1.20) + " con la tarjeta numero " + numeroTarjeta);
                   console.log("Gracias por su compra");
               } else if (cuotas === "12") {
                   console.log("El importe a pagar es $ " + (precioZapatillas * cantidadZapatillas * 1.70) + " con la tarjeta numero " + numeroTarjeta);
                   console.log("Gracias por su compra");
               } else {
                   console.log("El número de cuotas ingresado no es correcto, elija entre 3, 6 o 12 cuotas ");
               }
           } else {
               console.log("Los valores ingresados no son correctos");
           }
       } else {
           console.log("El método de pago ingresado no es correcto");
       }
   }



 



}




miTienda = new miTiendaOnline ();


miTienda.agregarZapatillas("Nike",34,"Rojas" ,145666,34);
miTienda.agregarZapatillas("Lacoste",45,"Blancas" ,156666,38);
miTienda.agregarZapatillas("Adidas",43,"Blancas y Negras" ,185666,37);


miTienda.agregarCliente("Gonzalo Grasso", "g@gmail.com","Av 18 1255");
miTienda.agregarCliente("Mariano Moreno", "m@gmail.com","L.de la Torre 657");
miTienda.agregarCliente("Sebastian Grasso", "sg@gmail.com","Tucuman 1255");

miTienda.agregarMetodoPago("Efectivo")
miTienda.agregarMetodoPago("Aplicacion")
miTienda.agregarMetodoPago("Debito")
miTienda.agregarMetodoPago("Credito")


miTienda.realizarVenta("Nike",34,"Rojas",145666,23,"Gonzalo Grasso")
miTienda.determinarStock("Nike",34,"Rojas")
miTienda.EjecutarPago("Credito",145666,23);


console.log(miTienda);
