const arrayCarrito = []

const cargarDomAlmacen = async () => {
    let llamada = await fetch("../json/productos.json")
    let data = await llamada.json();

    let divProductos = document.querySelector("#divProductos");

    data.forEach(producto => {
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
                <button class="button" data-id="${producto.id}">Agregar</button>
            </div>
            `;
        divProductos.appendChild(div)
    })
})
}

trayendoArrayJson()
cargarDomAlmacen()

// cargarDomAlmacen()

// let buscador = document.querySelector("#buscador")
// buscador.addEventListener("keyup", (e) =>{
//     let divProductos = document.querySelector("#divProductos");
//     divProductos.innerHTML = ""
//     arrayProductos.filter(producto => producto.nombre.toLowerCase().includes(e.target.value)).forEach(producto => {
//         let div = document.createElement("div");
//         div.className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"
//         div.innerHTML = `
//             <div class="cajita">
//                 <img class="img_shadow" src="${producto.img}" alt="">
//                 <p class="descripcion-fotos">${producto.nombre}</p>
//                 <span>$${producto.precio}</span>
//                 <button class="button" data-id="${producto.id}">Agregar</button>
//             </div>
//             `;
//         divProductos.appendChild(div)
//     })
//     let botones = document.querySelectorAll(".button");
//     botones.forEach((boton) => {
//         boton.addEventListener("click", (e) => {
//             let id = e.target.arrayProductosset.id;
//             let prodEncontrado = arrayProductos.find((producto) => producto.id == id);
//             console.log(`Producto encontrado: ${prodEncontrado}`)
//         })
//     })
// })

// let seleccionaAlfajorMilka = document.querySelector("#milka-oreo");
// let seleccionaAlfajorPepitos = document.querySelector("#pepito-triple");
// let seleccionaAlfajorTerrabusi = document.querySelector("#terrabusi");
// let seleccionaAlfajorShot = document.querySelector("#shot-con-mani");

// let seleccionaCoflerAlmendras = document.querySelector("#cofler-almendras");
// let seleccionaCoflerRocklets = document.querySelector("#cofler-rocklets");
// let seleccionaCoflerBlock = document.querySelector("#cofler-block");
// let seleccionaCoflerTresPlaceres = document.querySelector("#cofler-tres-placeres");

// let seleccionaSnackJamonSerrano = document.querySelector("#jamon-serrano");
// let seleccionaSnackKetchup = document.querySelector("#ketchup")
// let seleccionaSnackPehuamarAcanaladas = document.querySelector("#pehuamar-acanaladas")
// let seleccionaSnackPehuamarClasicas = document.querySelector("#pehuamar-clasicas")

// let seleccionaPizzaMozzarella = document.querySelector("#pizza-muzzarella-2")
// let seleccionaPizzaMozzarellaXL = document.querySelector("#pizza-mozzarella-XL")
// let seleccionaPizzaMozzarellaClasica = document.querySelector("#pizza-mozzarella-clasica")
// let seleccionaPizzaMozzarellaJYQ = document.querySelector("#pizza-mozzarella-jyq")

// seleccionaAlfajorMilka.addEventListener('click', function(){
//     arrayCarrito.push(alfajorMilka)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaAlfajorPepitos.addEventListener('click', function(){
//     arrayCarrito.push(alfajorPepitos)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaAlfajorTerrabusi.addEventListener('click', function(){
//     arrayCarrito.push(alfajorTerrabusi)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaAlfajorShot.addEventListener('click', function(){
//     arrayCarrito.push(alfajorShot)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaCoflerAlmendras.addEventListener('click', function(){
//     arrayCarrito.push(coflerAlmendras)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaCoflerBlock.addEventListener('click', function(){
//     arrayCarrito.push(coflerBlock)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaCoflerRocklets.addEventListener('click', function(){
//     arrayCarrito.push(coflerRocklets)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaCoflerTresPlaceres.addEventListener('click', function(){
//     arrayCarrito.push(coflerTresPlaceres)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaSnackJamonSerrano.addEventListener('click', function(){
//     arrayCarrito.push(snackJamonSerrano)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaSnackKetchup.addEventListener('click', function(){
//     arrayCarrito.push(snackKetchup)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaSnackPehuamarAcanaladas.addEventListener('click', function(){
//     arrayCarrito.push(snackPehuamarAcanaladas)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaSnackPehuamarClasicas.addEventListener('click', function(){
//     arrayCarrito.push(snackPehuamarClasicas)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaPizzaMozzarella.addEventListener('click', function(){
//     arrayCarrito.push(pizzaMozzarella)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaPizzaMozzarellaClasica.addEventListener('click', function(){
//     arrayCarrito.push(pizzaMozzarellaClasica)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaPizzaMozzarellaJYQ.addEventListener('click', function(){
//     arrayCarrito.push(pizzaMozzarellaJYQ)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })

// seleccionaPizzaMozzarellaXL.addEventListener('click', function(){
//     arrayCarrito.push(pizzaMozzarellaXL)
//     localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
// })