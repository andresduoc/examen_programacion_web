function cambiarColorDivs() {
    // Obtiene los elementos div por sus IDs
    var div1 = document.getElementById("header11");
    var div2 = document.getElementById("header22");
    var div3 = document.getElementById("div3");

    // Cambia el color de los divs
    cambiarColor(div1);
    cambiarColor(div2);
    cambiarColor(div3);
}

// Función para cambiar el color del div al hacer clic
function cambiarColor(div) {
    var colorActual = div.style.backgroundColor;

    if (colorActual === "rgb(58, 153, 67)" || colorActual === "#3A9943") {
        // Cambiar a color negro
        div.style.backgroundColor = "black";
        // Puedes ajustar aquí si también deseas cambiar otros estilos
    } else {
        // Cambiar a color verde (#3A9943)
        div.style.backgroundColor = "#3A9943";
        // Puedes ajustar aquí si también deseas cambiar otros estilos
    }
}