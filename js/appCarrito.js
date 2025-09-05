let total = 0

const cargarDomCarrito = () => {
    try {
        let arrayCarrito = JSON.parse(sessionStorage.getItem("Carrito"))
        let tablaCarrito = document.querySelector("#tablaCarrito");
        let tablaTitulos = document.createElement("tr")
        tablaTitulos.innerHTML = `
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio c/u</th>
                <th>Cantidad</th>
                <th>Eliminar</th>
                <th>Precio total</th>
            </tr>
        `
        tablaCarrito.appendChild(tablaTitulos)
        arrayCarrito.forEach(producto => {
            let tablaProductos = document.createElement("tr");
            let precioTotal = producto.precio * producto.cantidad
            total = total + precioTotal
            tablaProductos.innerHTML = `                
                <tr class="listaCarrito">
                    <td><img class="img_shadow" src="${producto.img}" alt=""></td>
                    <td><h2>${producto.nombre}</h2></td>
                    <td><h2>${producto.precio}</h2></td>
                    <td><h2>${producto.cantidad}</h2></td>
                    <td><button class="btnEliminar" id=${producto.id}>Eliminar</button></td>
                    <td><h2>${precioTotal}</h2></td>
                </tr>
                `;
            tablaCarrito.appendChild(tablaProductos)
        });
        let botones = document.querySelectorAll(".btnEliminar");
        botones.forEach(btn => {
            btn.addEventListener("click", (e)=>{
                let id = e.target.id;
                let prodEncontrado = arrayCarrito.find(prod => prod.id == id)
                if(arrayCarrito.find(prod => prod == prodEncontrado)) {
                    prodEncontrado.cantidad = prodEncontrado.cantidad -1
                    total = 0
                    let tablaCarrito = document.querySelector("#tablaCarrito");
                    tablaCarrito.innerHTML =""
                    if(prodEncontrado.cantidad == 0){
                        arrayCarrito = arrayCarrito.filter(prod => prod.cantidad > 0)
                    }
                    sessionStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
                    let tablaTotales = document.querySelector("#tablaTotales")
                    tablaTotales.innerHTML= ""
                    cargarDomCarrito()
                }
            })
        })
        cargarTotal()
    } catch (error) {        
        let contenedorDeTitulos = document.querySelector(".contenedorDeTitulos")
        let h4 = document.createElement("h4")
        h4.innerHTML=`
        <h4>Su carrito se encuentra vacío en este momento. Agregue los productos deseados</h4>
        `
        contenedorDeTitulos.appendChild(h4)
    }
}


const cargarTotal = () => {
    let totalCarrito = document.querySelector("#tablaTotales");
    let tabla = document.createElement("tr")
    tabla.innerHTML = `
        <tr>
            <td>Total</td>
            <td>----------------------------------------------</td>
            <td><h2>${total}</h2></td>
        </tr>
        `;
    totalCarrito.appendChild(tabla)    
}

cargarDomCarrito()
