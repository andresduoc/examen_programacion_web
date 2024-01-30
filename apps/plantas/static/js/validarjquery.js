$(document).ready(function() {
    $('#miFormulario').submit(function(event) {
        // nombre
        var nombreRegex = /^[A-Z][a-z]*$/;
        var nombre = $('#nombre').val();
        if (!nombreRegex.test(nombre)) {
            alert('El nombre debe empezar con mayúscula y contener solo letras.');
            event.preventDefault();
        }

        // cprreo
        var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var correo = $('#correo').val();
        if (!correoRegex.test(correo)) {
            alert('Ingrese un correo electrónico válido.');
            event.preventDefault();
        }

        // tarjeta
        var numeroRegex = /^\d{16}$/;
        var numero = $('#numero').val();
        if (!numeroRegex.test(numero)) {
            alert('Ingrese un número de 16 dígitos válido.');
            event.preventDefault();
        }
    });
});
