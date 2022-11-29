

// función para verificar que el usuario agregue un nombre
const verificacionNombre = () => {
    let nombreUsuario = ''
    let faltaNombre = true

    do {
    nombreUsuario = prompt ('Ingresa tu nombre de usuario'); 

    if (nombreUsuario != ''){
        alert ('¡Gracias! Ahora la contraseña, por recomendación debe ser diferente al nombre de usuario.')
        faltaNombre = false
    } else {
        alert ('Por favor, ingresa nombre de usuario')
    }
    
    } while (faltaNombre)

}

// función para verificar que las dos contraseñas coincidan
const verificacionUsuario = () => {
        
    let contrasena = ''
    let confirmacontra = ''
    let diferenteContra = true
 
    do {   
     contrasena = prompt ('Ingresa tu contraseña');
     confirmacontra = prompt ('Confirma tu contraseña'); 

    if (contrasena === confirmacontra && contrasena != '' && confirmacontra != '') {
        alert ('¡Su registro fue exitoso, su cupón con un 50% de descuento es el DES50si, ahora vayamos a comprar!')
        diferenteContra = false
        }
        else {
            alert ('Por favor, confirma que todos los campos estén llenos y las contraseñas coincidan.')
        }
    } while (diferenteContra);
}

// PRIMERA función que nos permite registrarnos en la página //

 const registroUsuario = () => {
     usuario = confirm ('¡Bienvenido! Tenemos un descuento del 50% para los primeros 1000 usuarios en registrarse, te interesaría registrarte?');
      
    if (usuario) {
        verificacionNombre ()
        verificacionUsuario()
     
    } else {
        alert ('Muy bien, vayamos a comprar!')
    }
             
 }

  
// Función para agregar cupón 

const agregarCupon = () => {

    let aplicarDescuento = true

    aplicarDescuento = confirm ('Antes de proceder a pagar, ¿Quieres aplicar un cupón de descuento a este pedido?')
   
       if (aplicarDescuento) {
           prompt('Agrega el cupón de descuento')
           alert ('¡Perfecto!, al agregar tu información de pago se aplicará al total de tu compra.')
       } else {
           alert ('Muy bien, procedamos a agregar la información de pago')
       }
   
   }

// Función para agregar productos al carrito

const compraDeArticulos = () => {
    let articulos = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
do {
    articulos = prompt ('¿Quieres comprar un collar, suéter o correa para tu mascota?');
    cantidad = prompt ('¿Cuántos deseas comprar?');
    

    switch (articulos) {
        case 'collar':
            precio = 300;
            break;
        case 'suéter':
            alert ('¡Oops! Por el momento los suéteres están agotados, te invitamos a seguir navegando en la página donde podrás encontrar más artículos de tu agrado.');
            break;
        case 'correa':
            precio = 300;
            break;
        default:
            alert ('Por favor, ingresa el artículo que deseas comprar')
            precio = 0;
            cantidad = 0;
            
    }
    
    totalCompra = precio*cantidad
    
    agregarMasArticulos = confirm ('¿Deseas agregar más artículos?')
    

} while (agregarMasArticulos);


 if (cantidad >0) {
    alert ('Muy bien, el precio total a pagar por los ' +cantidad + ' artículos seleccionados es de ' + totalCompra)
 } else {
    alert ('Te invitamos a checar nuestras ofertas')
 }

if (totalCompra >1){

 agregarCupon ()
} else {
    alert ('Te invitamos a seguir navegando en la página')
}


}

// Invocación de funciones 

registroUsuario ()
compraDeArticulos ()
