

const divProductos = document.getElementById("divProductos")

// SE PINTAN LOS PRODUCTOS EN LA PAGINA TIENDA2

    fetch('../js/productos.json')
    .then(response => response.json())
    .then(producto => {  
      producto.forEach((producto) =>{ 
          //if(producto.categoria == "sticker" || producto.categoria == "accesorios"){ (Esto esta comentado para hacer pruebas, poder pintar segun categorias)
             
            divProductos.innerHTML += `
            <section class=" col-3 box-${producto.id} producto" id="item" >
                <div class="item "  id="producto${producto.id}">
                    <div class="contenedor-img">
                        <a href="#">
                            <img src="${producto.img}" alt="${producto.categoria}">
                        </a>
                    </div>
                    <strong class="product-price">$${producto.precio}</strong>
                    <h2 class="product-name">${producto.nombre}</h2>
                    <p> ${producto.descripcion} </p>
                    
                    
                    <button id="boton${producto.id}" class="boton carrito add-to-cart-btn">Añadir al carrito</button>
                       
                </div>
            </section>`
          //}
            

        })
 })

 //<button onclick="agregar(${producto.id})" id="boton${producto.id}" class="boton carrito">Añadir al carrito</button> //
