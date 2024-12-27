const btnCart = document.querySelector('.cart-shopping')
const productsList = document.querySelector('.tshirts');

// 2. El componente carrito debera sumar los elementos que agregaste al carrito y mostrar el total
const cart = JSON.parse(localStorage.getItem('cart')) || []

const valorTotal = document.querySelector('#total')


/**
 * Funcion para agregar elementos al Carrito
 */
productsList.addEventListener('click', event => {
	if (event.target.classList.contains('btn-add-cart')) {
		const product = event.target.parentElement;
        const price = Number(product.querySelector('.price').textContent);
        const name = product.querySelector('.name').textContent;
        const shirtImg = product.querySelector('.tshirtimg').src;
        const shirt = {
            name: name,
            price: price,
            img: shirtImg
        }
        console.log("AGREGADO",cart)
        cart.push(shirt)
        localStorage.setItem('cart',JSON.stringify(cart));
        window.location.reload();
    }
    actualizarNumeroCarrito();
})


btnCart.addEventListener('click', event =>{
    // evento disparado
    // llamar a la funcion calcularTotal y pasarle como argumento el carrito que llenamos con el evento addcart
    //const valorTotal = calcularTotal(cart)
   window.location.href="http://127.0.0.1:5500/tshirt/BuyCart.index.html";
})

const cuentaCarritoElement = document.getElementById('count-cart').innerHTML = `(${cart.length})`;
function actualizarNumeroCarrito() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((acum, current) => {
        const shirtCount = current?.shirt; 
        return acum + shirtCount;
    }, 0);
    //const count = cart.reduce((acum, current) => acum+current.shirt,0 )
    cuentaCarritoElement.innerText = count;
    
  }
  
  actualizarNumeroCarrito();

  

