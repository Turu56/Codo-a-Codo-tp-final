document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Validación de campos obligatorios
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;
        
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }
        
        // Envío del formulario (aquí podrías agregar la lógica para enviar los datos a un servidor)
        alert("¡Formulario enviado correctamente!");
        form.reset();
    });
});
