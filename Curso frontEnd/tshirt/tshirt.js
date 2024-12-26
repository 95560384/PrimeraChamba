const btnCart = document.querySelector('.cart-shopping')
const productsList = document.querySelector('.tshirts');

// 2. El componente carrito debera sumar los elementos que agregaste al carrito y mostrar el total
const cart = JSON.parse(localStorage.getItem('cart')) || []
console.log("CARRO",cart)

const valorTotal = document.querySelector('#total')

/**
 * Funcion para agregar elementos al Carrito broh
 */
productsList.addEventListener('click', event => {
	if (event.target.classList.contains('btn-add-cart')) {
		const product = event.target.parentElement;
        const price = Number(product.querySelector('.price').textContent);
        const name = product.querySelector('.name').textContent;
        const shirtImg = product.querySelector('.tshirtimg').src;
        //console.log('name',name)
        //console.log('price',price)
        const shirt = {
            name: name,
            price: price,
            img: shirtImg
        }
        console.log("AGREGADO",cart)
        cart.push(shirt)
        localStorage.setItem('cart',JSON.stringify(cart));
    }
})

// Disparar un Evento cuando haces click en el carrito, y cuando se invoca el evento, disparar un ALERT en pantalla
btnCart.addEventListener('click', event =>{
    // evento disparado

    // llamar a la funcion calcularTotal y pasarle como argumento el carrito que llenamos con el evento addcart
    //const valorTotal = calcularTotal(cart)
    //alert(valorTotal)
   window.location.href="http://127.0.0.1:5500/tshirt/BuyCart.index.html";
})