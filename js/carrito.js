//Declaracion de variables
const listaProductos = document.querySelector('.divProductos') //productList 
const listaCarrito = document.querySelector('.listaCarrito') //cartList - cart-list
const valorConteoCarrito = document.getElementById('valorConteoCarrito') //cartCountInfo - cart-count-info
const valorTotalCarrito = document.getElementById('valorTotalCarrito') //cartTotalValue - cart-total-value
let cartItemID = 1

eventListeners()

//Eventos
function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        cargarCarrito()
    })
    //Agregar al carrito
    listaProductos.addEventListener('click', comprarProducto)
    //Eliminar del carrito
    listaCarrito.addEventListener('click', eliminarProducto)
}

function actualizarCarrito(){
    let cartInfo = findCartInfo()
    valorConteoCarrito.textContent = cartInfo.productCount
    valorTotalCarrito.textContent = cartInfo.total
}

//Obtener producto al clickear
function comprarProducto(e){
    if(e.target.classList.contains('addCarrito')){
        let producto = e.target.parentElement.parentElement
        productoInfo(producto)
     }
}

//Obtener info de producto clickeado
function productoInfo(producto){
     let productoInfo = {
         id: cartItemID,
         imgSrc: producto.querySelector('.contenedor-img img').src,
         nombre: producto.querySelector('.nombreProducto').textContent,
         precio: producto.querySelector('.precioProducto').textContent
     }
     cartItemID++
     agregarListaCarrito(productoInfo)
     guardarProductoStorage(productoInfo) 
}

//Pintar productos clickeados en carrito
function agregarListaCarrito(producto){
     const cartItem = document.createElement('div')
     cartItem.classList.add('item-carrito')
     cartItem.setAttribute('data-id', `${producto.id}`)
     cartItem.innerHTML = `
        <img src = "${producto.imgSrc}" alt = "imagen ${producto.categoria} ">
        <div class = "InfoProductoCarrito">
            <h3 class = "nombreProductoCarrito">${producto.nombre}</h3>
            <span class = "precioProductoCarrito">${producto.precio}</span>
            
        </div>
        <button type = "button" class = "eliminar">
            <i class = "fas fa-times"></i>
        </button>
    `
    listaCarrito.appendChild(cartItem)
}

//Guardar producto en storage

function guardarProductoStorage(item){
    let productos = obtenerProductoStorage()
    productos.push(item)
    localStorage.setItem('productos', JSON.stringify(productos))
    actualizarCarrito()
}

//Obtener productos del storage
function obtenerProductoStorage(){
    return localStorage.getItem('productos') ? JSON.parse(localStorage.getItem('productos')) : []     
}

//Cargar productos del carrito
function cargarCarrito(){
    let productos = obtenerProductoStorage()
    if(productos.length < 1){
        cartItemID = 1           
    }else {
        cartItemID = productos[productos.length - 1].id
        cartItemID++
    }
    productos.forEach(producto => agregarListaCarrito(producto))

    actualizarCarrito()
}

//Calcular precio final
function findCartInfo(){
    let productos = obtenerProductoStorage()
    let total = productos.reduce((acc, producto) =>{
        let precio = parseFloat(producto.precio.substr(1))
        return acc += precio
    }, 0)
    return{
        total: total.toFixed(2),
        productCount: productos.length
    }
}

findCartInfo()

//Eliinar producto del carrito
function eliminarProducto(e){
    let cartItem
    if(e.target.tagName === "BUTTON"){
        cartItem = e.target.parentElement
        cartItem.remove()

    }else if(e.target.tagName === "I"){
        cartItem = e.target.parentElement.parentElement
        cartItem.remove()
    }
    let productos = obtenerProductoStorage()
    let actualizarProductos = productos.filter(producto => {
        return producto.id !== parseInt(cartItem.dataset.id);
    });
    localStorage.setItem('productos', JSON.stringify(actualizarProductos))
    actualizarCarrito()  
}


    

