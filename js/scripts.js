// PRIMER BORRADOR DE LA PAGINA CON CARRITO ESTATICO EN TIENDA //

// PENDIENTE BORRAR POSTERIOR A LA FINALIZACION DE LA SEGUNDA VERSION //

/* INVENTARIO DE PRODUCTOS */

class Producto {
    constructor(id, nombre, precio, descripcion, categoria, stock, img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.descripcion = descripcion
        this.categoria = categoria
        this.stock = stock
        this.img = img
    }
}

    /* WASHITAPES */
const producto1 = new Producto("1", "Washi Azul", 1000, "Set de 10 washitape decorativas azules variadas", "washitapes", 5, "../imagenes/tienda/washitapes/washitape 1.jpg")
const producto2 = new Producto("2", "Washi Perritos", 2000, "Set de 10 washitape decorativas perritos", "washitapes", 5, "../imagenes/tienda/washitapes/washitape 2.jpg")
const producto3 = new Producto("3", "Washi Abstracto", 3000, "Set de 10 washitape decorativas Abstractas", "washitapes", 5, "../imagenes/tienda/washitapes/washitape 3.jpg")
const producto4 = new Producto("4", "Washi Van Gogh", 3000, "Set de 3 washitape decorativas Van Gogh", "washitapes", 5, "../imagenes/tienda/washitapes/washitape 4.jpg")

    /* STICKERS */
const producto5 = new Producto("5", "Sticker ABC 123", 1000, "Set numeros y letras coloridos. 48 patrones diferentes", "stickers", 5, "../imagenes/tienda/sticker/sticker 1.jpg")
const producto6 = new Producto("6", "Sticker Gatitos", 2000, "Set lindos sticker gatitos kawai. 45 patrones diferentes", "stickers", 5, "../imagenes/tienda/sticker/sticker 2.jpg")
const producto7 = new Producto("7", "Sticker POP", 3000, "Set sticker vintage Pop colorido. 46 patrones diferentes", "stickers", 5, "../imagenes/tienda/sticker/sticker 3.jpg")
const producto8 = new Producto("8", "Sticker Van Gogh", 3000, "Set decorativo pinturas Van Gogh. 100 patrones diferentes", "stickers", 5, "../imagenes/tienda/sticker/sticker 4.jpg")

    /* AGENDAS */
const producto9 = new Producto("9", "Agenda Gatitos", 1000, "Linda Agenda diseño gatitos. Estilo: Puntitos", "agendas", 5, "../imagenes/tienda/agendas/agenda 1.jpg")
const producto10 = new Producto("10", "Agenda Love", 2000, "Linda Agenda diseño letras. Estilo: Puntitos", "agendas", 5, "../imagenes/tienda/agendas/agenda 2.jpg")
const producto11 = new Producto("11", "Agenda Cactus", 3000, "Linda agenda diseño cactus. Estilo: Puntitos", "agendas", 5, "../imagenes/tienda/agendas/agenda 3.jpg")
const producto12 = new Producto("12", "Agenda Palta", 3000, "Linda agenda diseño palta. Estilo: Puntitos", "agendas", 5, "../imagenes/tienda/agendas/agenda 4.jpg")

    /* ACCESORIOS */
const producto13 = new Producto("13", "Clips Cactus", 1000, "Lindos clips con estilo de cactus. 5 colores", "accesorios", 5, "../imagenes/tienda/accesorios/accesorios 1.jpg")
const producto14 = new Producto("14", "Cutter", 2000, "Lindos cutter para paginas. 1 diseño 3 colores", "accesorios", 5, "../imagenes/tienda/accesorios/accesorios 2.jpg")
const producto15 = new Producto("15", "Cinta Decorativa", 3000, "Linda cinta adhesiva kawai decorativa. 2 diseños", "accesorios", 5, "../imagenes/tienda/accesorios/accesorios 3.jpg")
const producto16 = new Producto("16", "Sujeta Páginas", 3000, "Lindos sujeta páginas medianos. 4 colores", "accesorios", 5, "../imagenes/tienda/accesorios/accesorios 4.jpg")

    /* MEMOPADS */
const producto17 = new Producto("17", "Marca Páginas", 1000, "Lindos Marcadores de páginas. 5 diseños. 60 unidades", "memopads", 5, "../imagenes/tienda/notas adhesivas/notas adhesivas 1.jpg")
const producto18 = new Producto("18", "Índice Adhesivo", 2000, "Marca páginas indice. 2 diseños. 10 patrones. 15 unidades", "memopads", 5, "../imagenes/tienda/notas adhesivas/notas adhesivas 2.jpg")
const producto19 = new Producto("19", "Índice Puntos", 3000, "Marca páginas indice. 2 diseños. 11 patrones. 15 unidades", "memopads", 5, "../imagenes/tienda/notas adhesivas/notas adhesivas 3.jpg")
const producto20 = new Producto("20", "Banderitas", 3000, "Marca páginas Diseños. 2 diseños. 5 patrones. 20 unidades", "memopads", 5, "../imagenes/tienda/notas adhesivas/notas adhesivas 4.jpg")

    /* PLANIFICADORES */
const producto21 = new Producto("21", "Planificador Semanal", 1000, "Sencillo y fácil de usar. Estilo: Neon", "planificadores", 5, "../imagenes/tienda/planificadores/planner 1.jpg")
const producto22 = new Producto("22", "Planificador Semanal", 2000, "Sencillo y fácil de usar. Estilo: Donas.", "planificadores", 5, "../imagenes/tienda/planificadores/planner 2.jpg")
const producto23 = new Producto("23", "Registro de Hábitos", 3000, "Planifica tu mes y lleva el control de tus tareas", "planificadores", 5, "../imagenes/tienda/planificadores/planner 3.jpg")
const producto24 = new Producto("24", "Registro de Hábitos", 3000, "Planifica tu mes y lleva el control de tus tareas", "planificadores", 5, "../imagenes/tienda/planificadores/planner 4.jpg")

    /* CATEGORIAS */
let washitapes = [producto1, producto2, producto3, producto4]
let stickers = [producto5, producto6, producto7, producto8]
let agendas = [producto9, producto10, producto11, producto12]
let accesorios = [producto13, producto14, producto15, producto16]
let memopads = [producto17, producto18, producto19, producto20]
let planificadores = [producto21, producto22, producto23, producto24]

    /* INVENTARIO COMPLETO */
let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24 ]

    /* CONSULTA CARRITO */

/*let carrito = []

if(localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito')) 
} else {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}*/


/* AGREGANDO PRODUCTOS A LA TIENDA*/

const gridProductos1 = document.getElementById("grid-productos-1")
const gridProductos2 = document.getElementById("grid-productos-2")
const gridProductos3 = document.getElementById("grid-productos-3")
const gridProductos4 = document.getElementById("grid-productos-4")
const gridProductos5 = document.getElementById("grid-productos-5")
const gridProductos6 = document.getElementById("grid-productos-6")
const contenedorCarrito = document.getElementById("mostrar-carrito")

tarjetas1 = () => {
    gridProductos1.innerHTML = ""
    washitapes.forEach((producto) =>{
        gridProductos1.innerHTML += `
        <section class="box-${producto.id} producto" >
            <div class="item"  id="producto${producto.id}">
                <div class="contenedor-img">
                    <a href="#">
                        <img src="${producto.img}" alt="washitape">
                    </a>
                </div>
                <strong>$${producto.precio}</strong>
                <h2>${producto.nombre}</h2>
                <p> ${producto.descripcion} </p>
                <button onclick="agregar(${producto.id})" id="boton${producto.id}" class="boton carrito">Añadir al carrito</button>
                    
            </div>
        </section>`

    })
}

tarjetas2 = () => {
    gridProductos2.innerHTML = ""
    stickers.forEach((producto) =>{
        gridProductos2.innerHTML += `
        <section  class="box-${producto.id} producto">
            <div class="item" id="producto${producto.id}">
                <div class="contenedor-img">
                    <a href="#">
                        <img src="${producto.img}" alt="stickers">
                    </a>
                </div>
                <strong>$${producto.precio}</strong>
                <h2>${producto.nombre}</h2>
                <p> ${producto.descripcion} </p>
                <button onclick="agregar(${producto.id})" id="boton${producto.id}" class="boton carrito">Añadir al carrito</button>
                    
            </div>
        </section>`

    })
}

tarjetas3 = () => {
    gridProductos3.innerHTML = ""
    agendas.forEach((producto) =>{
        gridProductos3.innerHTML += `
        <section  class="box-${producto.id} producto">
            <div class="item" id="producto${producto.id}">
                <div class="contenedor-img">
                    <a href="#">
                        <img src="${producto.img}" alt="agendas">
                    </a>
                </div>
                <strong>$${producto.precio}</strong>
                <h2>${producto.nombre}</h2>
                <p> ${producto.descripcion} </p>
                <button onclick="agregar(${producto.id})" id="boton${producto.id}" class="boton carrito">Añadir al carrito</button>
                    
            </div>
        </section>`

    })
}

tarjetas4 = () => {
    gridProductos4.innerHTML = ""
    accesorios.forEach((producto) =>{
        gridProductos4.innerHTML += `
        <section  class="box-${producto.id} producto">
            <div class="item" id="producto${producto.id}">
                <div class="contenedor-img">
                    <a href="#">
                        <img src="${producto.img}" alt="accesorios">
                    </a>
                </div>
                <strong>$${producto.precio}</strong>
                <h2>${producto.nombre}</h2>
                <p> ${producto.descripcion} </p>
                <button onclick="agregar(${producto.id})" id="boton${producto.id}" class="boton carrito">Añadir al carrito</button>
                    
            </div>
        </section>`

    })
}

tarjetas5 = () => {
    gridProductos5.innerHTML = ""
    memopads.forEach((producto) =>{
        gridProductos5.innerHTML += `
        <section class="box-${producto.id} producto">
            <div class="item" id="producto${producto.id}">
                <div class="contenedor-img">
                    <a href="#">
                        <img src="${producto.img}" alt="memopads">
                    </a>
                </div>
                <strong>$${producto.precio}</strong>
                <h2>${producto.nombre}</h2>
                <p> ${producto.descripcion} </p>
                <button onclick="agregar(${producto.id})" id="boton${producto.id}" class="boton carrito">Añadir al carrito</button>
                    
            </div>
        </section>`

    })
}

tarjetas6 = () => {
    gridProductos6.innerHTML = ""
    planificadores.forEach((producto) =>{
        gridProductos6.innerHTML += `
        <section class="box-${producto.id} producto">
            <div class="item" id="producto${producto.id}">
                <div class="contenedor-img">
                    <a href="#">
                        <img class="item-img" src="${producto.img}" alt="planificadores">
                    </a>
                </div>
                <strong class="item-precio">$${producto.precio}</strong>
                <h2 class="item-nombre">${producto.nombre}</h2>
                <p> ${producto.descripcion} </p>
                <button onclick="agregar(${producto.id})"  id="boton${producto.id}" class="boton carrito">Añadir al carrito</button>
                    
            </div>
        </section>`

    })
}

// onclick="agregar(${producto.id})"

function mostrarCarrito (){
    let carrito = capturarStorage()
    contenedorCarrito.innerHTML = ""
    carrito.forEach(element => {
        contenedorCarrito.innerHTML += `
        <tr>
            <th scope="row">${element.cantidad}</th>
            <td>${element.nombre}</td>
            <td>${element.precio}</td>
            <td>x</td>
        </tr>
        `
    })
}



function capturarStorage(){
    return JSON.parse(localStorage.getItem("carrito")) || []

}

function guardarStorage(car){
    localStorage.setItem("carrito", JSON.stringify(car))
}


function agregar(idBoton){
    let carrito = capturarStorage()
    if(isInCart(idBoton)){
        incrementarCarrito(idBoton)
    } else {
        let productoEncontrado = productos.find(e => e.id == idBoton)
        carrito.push({ ...productoEncontrado, cantidad:1})
        guardarStorage(carrito)
        mostrarCarrito(carrito)
    }
    console.log(carrito)
}

function incrementarCarrito(id){
    let carrito = capturarStorage()
    const indice = carrito.findIndex(e=> e.id == id)
    carrito [indice].cantidad++
    guardarStorage(carrito)
    mostrarCarrito(carrito)
}

function isInCart (id){
    let carrito = capturarStorage()
    return carrito.some(e=> e.id == id)
}



tarjetas1(washitapes)
tarjetas2(stickers)
tarjetas3(agendas)
tarjetas4(accesorios)
tarjetas5(memopads)
tarjetas6(planificadores)
mostrarCarrito()





