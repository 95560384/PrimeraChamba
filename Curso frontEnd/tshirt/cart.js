function elementFromHTML(html){
    const template = document.createElement('template')
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}
const summary = document.querySelector('.summary')

const cart = JSON.parse(localStorage.getItem('cart'))
const total = calcularTotal(cart)
localStorage.setItem('total', total)


if (cart && cart.length > 0){
    document.getElementById("cant-products").innerHTML = `Productos(${cart.length})`;
    document.getElementById("total-price").innerHTML = `Total: $${total}`;
    cart.forEach(element => {
        summary.innerHTML += `<article class="item-cart">
                <a class="item-cart-img" href="">
                    <img src="${element.img}" width="110px">
                </a>


                <div class="item-price-container">
                    <div class="item-price">
                    
                        <h2 class="item-title">${element.name}</h2>
                        <div class="action"></div>
                        <button class="btns-price">-</button>
                        <div class="current-price">$${element.price}</div>
                    </div>
                </div>

            </article>`
    });
}

const productList  =  document.querySelector('.summary');
productList.addEventListener('click', event => {
	if (event.target.classList.contains('btns-price')) {
        const parent = event.target.parentElement
        const name = parent.querySelector('.item-title').textContent
        const index = cart.findIndex((element) => element.name === name);
        cart.splice(index,1);
        localStorage.setItem('total', calcularTotal(cart))
        localStorage.setItem('cart',JSON.stringify(cart))
        window.location.reload();
    }
})


function calcularTotal(cart) {
    
    let acumulado = 0
    
    for (let i = 0; i < cart.length; i++){
        acumulado = acumulado + cart[i].price
    }
    
    return acumulado;
}
    