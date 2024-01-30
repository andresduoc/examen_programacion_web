function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Verifica si hay un carrito en el localStorage, si no, crea uno vacío.
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
    // Actualizar la visualización del carrito en el offcanvas-body
    actualizarCarritoVisual();
}

// Función para actualizar la visualización del carrito en el offcanvas-body
function actualizarCarritoVisual() {
    const offcanvasBody = document.querySelector('.offcanvas-body');
    offcanvasBody.innerHTML = ''; // Limpiar el contenido actual

    // Crear elementos para cada producto en el carrito y agregarlos al offcanvas-body
    carrito.forEach(producto => {
        const productoElement = document.createElement('h5');
        productoElement.textContent = `Nombre del producto: ${producto.nombre}  Precio del producto: $${producto.precio}`;
        offcanvasBody.appendChild(productoElement);
    });
}

// Asociar esta función al hacer clic en el botón "Comprar"
function comprarProducto(id, nombre, precio) {
    // Crea un objeto que representa el producto
    let producto = {
        id: id,
        nombre: nombre,
        precio: precio
    };

    // Agrega el producto al carrito
    agregarAlCarrito(producto);

    // Puedes mostrar un mensaje al usuario o realizar otras acciones según sea necesario
    alert(`¡${nombre} agregado al carrito!`);
}

// Llamar a la función de inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // ... Otro código ...

    // Llamar a la función para actualizar la visualización del carrito al cargar la página
    actualizarCarritoVisual();
});


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

    if(window.scrollY > 250){
        scrollTop.style.display = 'initial';
    }else{
        scrollTop.style.display = 'none';
    }

}

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop:true,
});

let countDate = new Date('june 1, 2021 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();

    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

function validar() {
    var isValid = true;

    var idField = document.getElementById('txtID');
    if (idField.value.trim() === '' || isNaN(idField.value)) {
        alert('Por favor, ingrese un valor válido para el campo ID.');
        isValid = false;
    }

    var nombreField = document.getElementById('txtNombre');
    if (nombreField.value.trim() === '') {
        alert('Por favor, ingrese un nombre válido.');
        isValid = false;
    }


    if (isValid) {
        document.getElementById('FormularioDeAgregar').submit();
        alert('Producto agregado');
    }
}

setInterval(function(){
    countDown();
},1000)

