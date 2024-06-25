$(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            email_address: {
                required: true,
                email: true
            },
            query_type: {
                required: true
            },
            message: {
                required: true
            },
            consent: {
                required: true
            }
        },
        messages: {
            first_name: {
                required: "El campo es requerido<br>"
            },
            last_name: {
                required: "El campo es requerido"
            },
            email_address: {
                required: "El campo es requerido <br><br>"
            },
            query_type: {
                required: "El campo es requerido"
            },
            message: {
                required: "El campo es requerido"
            },
            consent: {
                required: "<br>El campo es requerido"
            }
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "query_type") {
                error.appendTo(element.closest('.radio-group'));
            } else if (element.attr("name") == "consent") {
                error.appendTo(element.closest('.checkbox-group'));
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {
            // Mostrar el mensaje de confirmación
            $("#confirmationMessage").slideDown().delay(3000).slideUp();
            // Opcional: Puedes borrar el contenido del formulario después de enviarlo
            // $(form)[0].reset();
        }
    });
});
