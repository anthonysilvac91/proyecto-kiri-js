//DECLARACION DE VARIABLES
const productList = document.querySelector('.divProductos')
const cartList = document.querySelector('.cart-list')
const cartCountInfo = document.getElementById('.cart-count-info')
const cartTotalValue = document.getElementById('.cart-total-value')
let cartItemID = 1

//EVENTOS
    function eventListeners(){
        window.addEventListener('DOMContentLoaded', () => {
            loadCart()
        })
    }
 

    // AGREGAR AL CARRITO
    productList.addEventListener('click', purchaseProduct);

    // VACIAR CARRITO
    cartList.addEventListener('click', deleteProduct);


    function updateCartInfo(){
        let cartInfo = findCartInfo();
        cartCountInfo.textContent = cartInfo.productCount;
        cartTotalValue.textContent = cartInfo.total;
    }


    // AGREGAR PRODUCTOS

function purchaseProduct(e){

   
    if(e.target.classList.contains('add-to-cart-btn')){
        
        let product = e.target.parentElement.parentElement
        
        getProductInfo(product)
     }
}

//OBTENER INFORMACION DE PRODUCTOS AL AGREGAR AL CARRITO
function getProductInfo(product){
    let productInfo = {
        id: cartItemID,
        imgSrc: product.querySelector('.contenedor-img img').src,
        nombre: product.querySelector('.product-name').textContent,
        precio: product.querySelector('.product-price').textContent
    }

    cartItemID++
    console.log(productInfo)
    addToCartList(productInfo);
    saveProductInStorage(productInfo);
}

//PINTAR PRODUCTOS EN EL CARRITO

function addToCartList(product){
    const cartItem = document.createElement('div')
    cartItem.classList.add('item-carrito')
    cartItem.setAttribute('data-id', `${product.id}`)
    cartItem.innerHTML = `
        <img src = "${product.imgSrc}" alt = "product image">
        <div class = "cart-item-info">
            <h3 class = "cart-item-name">${product.nombre}</h3>
            <span class = "cart-item-price">${product.precio}</span>
        </div>
        <button type = "button" class = "eliminar">
            <i class = "fas fa-times"></i>
        </button>
    `
    cartList.appendChild(cartItem)
}

//GUARDAR PRODUCTO EN LOCALSTORAGE
function saveProductInStorage(item){
    let products = getProductFromStorage();
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    updateCartInfo();
}

// OBTENER PRODUCTO DE LOCALSTORAGE
function getProductFromStorage(){
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    
}

//CARGAR PRODUCTOS Y AUMENTAR CANTIDAD

function loadCart(){
    let products = getProductFromStorage();
    if(products.length < 1){
        cartItemID = 1; 
    } else {
        cartItemID = products[products.length - 1].id;
        cartItemID++;
        
    }
    products.forEach(product => addToCartList(product));

   
    updateCartInfo();
}

//CALCULAR TOTAL DEL CARRITO
