const btnCart = document.querySelector('.cart-shopping')
const productsList = document.querySelector('.tshirts');

// 2. El componente carrito debera sumar los elementos que agregaste al carrito y mostrar el total
const cart = [];


const valorTotal = document.querySelector('#total')

productsList.addEventListener('click', event => {
	if (event.target.classList.contains('btn-add-cart')) {
		const product = event.target.parentElement;
        const price = Number(product.querySelector('.price').textContent);
        console.log('price',price)
        cart.push(price)
    }
    console.log(cart)
})

// Disparar un Evento cuando haces click en el carrito, y cuando se invoca el evento, disparar un ALERT en pantalla
btnCart.addEventListener('click', event =>{
    // evento disparado

    // llamar a la funcion calcularTotal y pasarle como argumento el carrito que llenamos con el evento addcart
    const valorTotal = calcularTotal(cart)
    //alert(valorTotal)
})


// PROXIMO PASO
// ELIMINAR ITEMS DE UN CARRITO , CUANDO SE DISPARE EL EVENTO ELIMINAR DE UN BOTON (EL BOTON PUEDE SER UN BOTON QUE DIGA ELIMINAR ITEM O LO QUE CONSIDERES)



/**
 * Cacular el valor total recorriendo el carrito haciendo la SUMATORIA de todos los items
 * eg. [2,3] = 5
 * [CARRITO] -> TOTAL
 * eg. [14,13,11] = 38
 * CARRITO ES UN ARRAY
 */
function calcularTotal(cart) {
    // cart = [3,8]
    let acumulado = 0
    for (let i = 0; i < cart.length; i++){
        // i = 0
        // cart[i] = 3
        // valorToal = 0 + 3
        // ValotTotal = 3 

        // 2davex
        // i = 1
        // cart[i]= 8
        // valorTotal = 3 + 8
        // 11
        acumulado = acumulado + cart[i]
    }
    
    return acumulado;
}

// Sintanxis de JS  estructura de datos, bucles, funciones, OBJETOS
// Semantica de JS  Algoritomos, problemas , sumatorias, problemas de codigo (eg. calculo de fibonacci)


    




