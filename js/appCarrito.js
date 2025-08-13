const arrayCarrito = JSON.parse(localStorage.getItem("Carrito"))
console.log(arrayCarrito)
let total = 0


const cargarDomCarrito = () => {
    let tablaCarrito = document.querySelector("#tablaCarrito");
    arrayCarrito.forEach(producto => {
        let tabla = document.createElement("tr");
        total = total + producto.precio
        tabla.innerHTML = `                
            <tr>
                <td><img class="img_shadow" src="${producto.img}" alt=""></td>
                <td><h2>${producto.nombre}</h2></td>
                <td><h2>${producto.precio}</h2></td>
            </tr>
            
            `;
    tablaCarrito.appendChild(tabla)
    });
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
cargarTotal()
console.log(total)