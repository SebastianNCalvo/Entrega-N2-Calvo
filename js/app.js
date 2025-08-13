// Constructor

class Producto {
    constructor(id, categoria, nombre, precio, img){
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img
    }
}

// Afajores de Almacén
let alfajorMilka = new Producto("milka-oreo", "alfajor", "Alfajor triple Milka Oreo 61gr", 1200, "../multimedia/productos/alfajor-oreo.jpg");
let alfajorPepitos = new Producto("pepito-triple", "alfajor", "Alfajor triple Pepitos 57gr", 1200, "../multimedia/productos/alfajor-pepito.jpg");
let alfajorTerrabusi = new Producto("terrabusi", "alfajor", "Alfajor Terrabusi clasico 50gr", 850, "../multimedia/productos/alfajor-terrabusi.jpg");
let alfajorShot = new Producto("shot-con-mani", "alfajor", "Alfajor triple Shot con maní 60gr", 1200, "../multimedia/productos/alfajor-trishot.jpg");

// Chocolates de Almacén
let coflerAlmendras = new Producto("cofler-almendras", "chocolate", "Chocolate Cofler con almendras 55gr", 2400, "../multimedia/productos/chocolate-cofler-almendras.jpg");
let coflerRocklets = new Producto("cofler-rocklets", "chocolate", "Chocolate Cofler con Rocklets 55gr", 2400, "../multimedia/productos/chocolate-cofler-rocklets.jpg");
let coflerBlock = new Producto("cofler-block", "chocolate", "Chocolate Cofler Block 300gr", 7400, "../multimedia/productos/chocolate-cofler-block.jpg");
let coflerTresPlaceres = new Producto("cofler-tres-placeres", "chocolate", "Chocolate Cofler tres placeres 55gr", 2400, "../multimedia/productos/chocolate-cofler-tres-placeres.jpg");

// Snacks de Almacén
let snackJamonSerrano = new Producto("jamon-serrano", "snack", "Papas fritas Jamón serrano Lays 77 gr", 3150, "../multimedia/productos/papas-fritas-lays-jamon-serrano.jpg");
let snackKetchup = new Producto("ketchup", "snack", "Papas fritas sabor Ketchup Lays 77 gr", 2950, "../multimedia/productos/papas-fritas-lays-ketchup.jpg");
let snackPehuamarAcanaladas = new Producto("pehuamar-acanaladas", "snack", "Papas fritas acanaladas Pehuamar 485 gr", 8500, "../multimedia/productos/papas-fritas-pehuamar-acanaladas.jpg");
let snackPehuamarClasicas = new Producto("pehuamar-clasicas", "snack", "Papas fritas clasicas Pehuamar 485 gr", 8500, "../multimedia/productos/papas-fritas-pehuamar-clasica.jpg");

// Pizzas de Almacén
let pizzaMozzarella = new Producto("pizza-muzzarella-2", "pizza", "Pizza Mozzarella 2 und Sibarita 940gr", 18000, "../multimedia/productos/pizza1.jpg");
let pizzaMozzarellaXL = new Producto("pizza-mozzarella-XL", "pizza", "Pizza Mozarella XL Sibarita 680gr", 13300, "../multimedia/productos/pizza2.jpg");
let pizzaMozzarellaClasica = new Producto("pizza-mozzarella-clasica", "pizza", "Pizza Mozarella clásica Sibarita 470gr", 9500, "../multimedia/productos/pizza3.jpg");
let pizzaMozzarellaJYQ = new Producto("pizza-mozzarella-jyq", "pizza", "Pizza Mozarella y jamón Sibarita 530gr", 13300, "../multimedia/productos/pizza4.jpg")

// Arrays con todos los objetos creados hasta el momento
const arrayProductos =[alfajorMilka, alfajorPepitos, alfajorTerrabusi, alfajorShot, coflerAlmendras, coflerBlock, coflerRocklets, coflerTresPlaceres, snackJamonSerrano, snackKetchup, snackPehuamarAcanaladas, snackPehuamarClasicas, pizzaMozzarella, pizzaMozzarellaClasica, pizzaMozzarellaJYQ, pizzaMozzarellaXL];
const arrayCarrito = []

const cargarDomAlmacen = () => {
    let divProductos = document.querySelector("#divProductos");
    arrayProductos.forEach(producto => {
        let div = document.createElement("div");
        div.className = "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"
        div.innerHTML = `
            <div class="cajita">
                <img class="img_shadow" src="${producto.img}" alt="">
                <p class="descripcion-fotos">${producto.nombre}</p>
                <span>$${producto.precio}</span>
                <input type="button" value="Agregar" id="${producto.id}">                
            </div>
            `;
        divProductos.appendChild(div)
    });
}

cargarDomAlmacen()

let seleccionaAlfajorMilka = document.querySelector("#milka-oreo");
let seleccionaAlfajorPepitos = document.querySelector("#pepito-triple");
let seleccionaAlfajorTerrabusi = document.querySelector("#terrabusi");
let seleccionaAlfajorShot = document.querySelector("#shot-con-mani");

let seleccionaCoflerAlmendras = document.querySelector("#cofler-almendras");
let seleccionaCoflerRocklets = document.querySelector("#cofler-rocklets");
let seleccionaCoflerBlock = document.querySelector("#cofler-block");
let seleccionaCoflerTresPlaceres = document.querySelector("#cofler-tres-placeres");

let seleccionaSnackJamonSerrano = document.querySelector("#jamon-serrano");
let seleccionaSnackKetchup = document.querySelector("#ketchup")
let seleccionaSnackPehuamarAcanaladas = document.querySelector("#pehuamar-acanaladas")
let seleccionaSnackPehuamarClasicas = document.querySelector("#pehuamar-clasicas")

let seleccionaPizzaMozzarella = document.querySelector("#pizza-muzzarella-2")
let seleccionaPizzaMozzarellaXL = document.querySelector("#pizza-mozzarella-XL")
let seleccionaPizzaMozzarellaClasica = document.querySelector("#pizza-mozzarella-clasica")
let seleccionaPizzaMozzarellaJYQ = document.querySelector("#pizza-mozzarella-jyq")

seleccionaAlfajorMilka.addEventListener('click', function(){
    arrayCarrito.push(alfajorMilka)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaAlfajorPepitos.addEventListener('click', function(){
    arrayCarrito.push(alfajorPepitos)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaAlfajorTerrabusi.addEventListener('click', function(){
    arrayCarrito.push(alfajorTerrabusi)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaAlfajorShot.addEventListener('click', function(){
    arrayCarrito.push(alfajorShot)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaCoflerAlmendras.addEventListener('click', function(){
    arrayCarrito.push(coflerAlmendras)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaCoflerBlock.addEventListener('click', function(){
    arrayCarrito.push(coflerBlock)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaCoflerRocklets.addEventListener('click', function(){
    arrayCarrito.push(coflerRocklets)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaCoflerTresPlaceres.addEventListener('click', function(){
    arrayCarrito.push(coflerTresPlaceres)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaSnackJamonSerrano.addEventListener('click', function(){
    arrayCarrito.push(snackJamonSerrano)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaSnackKetchup.addEventListener('click', function(){
    arrayCarrito.push(snackKetchup)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaSnackPehuamarAcanaladas.addEventListener('click', function(){
    arrayCarrito.push(snackPehuamarAcanaladas)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaSnackPehuamarClasicas.addEventListener('click', function(){
    arrayCarrito.push(snackPehuamarClasicas)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaPizzaMozzarella.addEventListener('click', function(){
    arrayCarrito.push(pizzaMozzarella)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaPizzaMozzarellaClasica.addEventListener('click', function(){
    arrayCarrito.push(pizzaMozzarellaClasica)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaPizzaMozzarellaJYQ.addEventListener('click', function(){
    arrayCarrito.push(pizzaMozzarellaJYQ)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})

seleccionaPizzaMozzarellaXL.addEventListener('click', function(){
    arrayCarrito.push(pizzaMozzarellaXL)
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito))
})