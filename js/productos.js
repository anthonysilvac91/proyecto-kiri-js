// profesor, intente dos cosas para no repetir el codigo, pero ninguna me funciono, tal vez lo implemente de mala manera. 1 de las  opciones era crear una funcion del pintado para ejecutarla en cada div a pintar. (no se logró). La otra opcion fue hacerlo con un ciclo, pero al momento de ejecutar la segunda condicion para pintar en el otro div, me dañaba el primero. tal vez no me explico bien, sin embargo me gustaria su ayudara para poder minimizar este codigo y que funciones para cualquier pagina que desee pintar. saludos


const divProductos = document.getElementById("divProductos")
const divDestacados = document.getElementById("divDestacados")

// SE PINTAN LOS PRODUCTOS DESTACADOS EN INDEX

    fetch('../js/productos.json')
    .then(response => response.json())
    .then(producto => {  
      producto.forEach((producto) =>{ 
         
        if(producto.destacado == "1"){
            divDestacados.innerHTML += `
            <section class="col-lg-3 col-md-6 col-6 box-${producto.id} producto" id="item" >
                <div class="item "  id="producto${producto.id}">
                    <div class="contenedor-img">
                        <a href="#">
                            <img src="${producto.img}" alt="${producto.categoria}">
                        </a>
                    </div>
                    <strong class="product-price">$${producto.precio}</strong>
                    <h2 class="product-name">${producto.nombre}</h2>
                    <p> ${producto.descripcion} </p>
                    
                    
                    <button id="boton${producto.id}" class="boton carrito addCarrito">Añadir al carrito</button>
                       
                </div>
            </section>`

          }
        
          })
        })

 // SE PINTAN LOS PRODUCTOS DESTACADOS EN TIENDA

        fetch('../js/productos.json')
        .then(response => response.json())
        .then(producto => {  
          producto.forEach((producto) =>{
                divProductos.innerHTML += `
                <section class="col-lg-3 col-md-4 col-6 box-${producto.id} producto" id="item" >
                    <div class="item"  id="producto${producto.id}">
                        <div class="contenedor-img">
                            <a href="#">
                                <img src="${producto.img}" alt="${producto.categoria}">
                            </a>
                        </div>
                        <strong class="precioProducto">$${producto.precio}</strong>
                        <h2 class="nombreProducto">${producto.nombre}</h2>
                        <p> ${producto.descripcion} </p>
                        
                        
                        <button id="boton${producto.id}" class="boton carrito addCarrito">Añadir al carrito</button>
                           
                    </div>
                </section>`
    
              })
            
              })
            