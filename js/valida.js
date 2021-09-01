$(document).ready(function () {

    $("select").val();
    console.log($("select").val());

    $("#form_registro").validate({
        rules: {
            nombre: "required",
            apellidos: "required",
            cp: {
                number: true,
                rangelength: [5, 5]
            },
            provincia: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                rangelength: [8, 16]
            },
            confirma_password: {
                required: true,
                equalTo: "#password"
            },
            acepto: "required",
        },
        messages: {
            nombre: "Campo obligatorio",
            apellidos: "Campo obligatorio",
            cp: {
                number: "Ingresar un CP válido",
                rangelength: "Debe tener 5 dígitos"
            },
            provincia: {
                required: "Seleccione una provincia"
            },
            email: {
                required: "Campo obligatorio",
                email: "Email no válido"
            },
            password: {
                required: "Campo obligatorio",
                rangelength: "Debe tener entre 8 y 16 carácteres"
            },
            confirma_password: {
                required: "Campo obligatorio",
                equalTo: "Tiene que ser igual a la contraseña"
            },
            acepto: "Debe aceptar la condiciones antes de envíar"
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                // error.appendTo(element.parent());
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }

        }

    });

});