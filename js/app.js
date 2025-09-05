let arrayCarrito = []


const cargarDomAlmacen = async () => {
    let traerArrayJson = await fetch("../json/productos.json")
    let nuevoArrayProductos = await traerArrayJson.json();
    let divProductos = document.querySelector("#divProductos");

    nuevoArrayProductos.forEach(producto => {
        let div = document.createElement("div");
        div.className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"
        div.id = "divHijos"
        div.innerHTML = `
            <div class="cajita">
                <img class="img_shadow" src="${producto.img}" alt="">
                <p class="descripcion-fotos">${producto.nombre}</p>
                <span>$${producto.precio}</span>
                <input type="button" value="Agregar" class="button" id="${producto.id}">                
            </div>
        `
    divProductos.appendChild(div);
    })
    botonAgregar()
}

const trayendoArrayJson = async () =>{
    let traerArrayJson = await fetch("../json/productos.json");
    let nuevoArrayProductos = await traerArrayJson.json();

    let buscador = document.querySelector("#buscador")
    buscador.addEventListener("keyup", (e) =>{
        let divProductos = document.querySelector("#divProductos");
        divProductos.innerHTML = ""
        nuevoArrayProductos.filter(producto => producto.nombre.toLowerCase().includes(e.target.value)).forEach(producto => {
            let div = document.createElement("div");
            div.className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"
            div.innerHTML = `
                <div class="cajita">
                    <img class="img_shadow" src="${producto.img}" alt="">
                    <p class="descripcion-fotos">${producto.nombre}</p>
                    <span>$${producto.precio}</span>
                    <input type="button" value="Agregar" class="button" id="${producto.id}">                
                </div>
                `;
            divProductos.appendChild(div)
        })
        botonAgregar()
    })
}

const botonAgregar = async () => {
    let traerArrayJson = await fetch("../json/productos.json")
    let nuevoArrayProductos = await traerArrayJson.json();
    let botones = document.querySelectorAll(".button");    
    botones.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            let id = e.target.id;
            let prodEncontrado = nuevoArrayProductos.find(prod => prod.id == id)
            Toastify({
                text: "Producto agregado al carrito",
                fontSize: "1.8 rem",
                duration: 3000,
                gravity: "bottom",
                position: "center",
                style: {
                    background: "linear-gradient(to right, #38b000ff, #3dc944ff)",
                    borderRadius:"5px"
                },
            }).showToast();
            if(arrayCarrito.find(prod => prod == prodEncontrado)) {
                prodEncontrado.cantidad = prodEncontrado.cantidad +1
                sessionStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
            } else {
                arrayCarrito.push(prodEncontrado)
                sessionStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
            }
        })
    })
}

trayendoArrayJson()
cargarDomAlmacen()