/* ================ VALIDACION DE EMAIL - CONTACTO ================== */

const emailIsValido = (emailTest) =>
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        emailTest
    );

const validar = ({ email, nombre, mensaje }) => {
    const errors = {};

    if (!emailIsValido(email)) {
        console.log("La dirección de email " + email + " NO es correcta!.");
        errors.email = "Email inválido :(";
        return errors;
    }

    const campoIsEmpety = (campo, campoName) => {
        if (!campo) {
            errors[campoName] = `El ${campoName} es obligatorio`;
        }
        return Boolean(campo);
    };

    if (!campoIsEmpety(nombre, "nombre") || !campoIsEmpety(mensaje, "mensaje")) {
        console.log("Entró porque 'nombre' o 'mensaje' son campos vacios :v");
        return errors;
    }
};

const send = document.getElementById("send");

const inpEmail = document.getElementById("email");
const inpNombre = document.getElementById("nombre");
const inpMensaje = document.getElementById("mensaje");

const emailAviso = document.getElementById("email-aviso");
const nombreAviso = document.getElementById("nombre-aviso");
const mensajeAviso = document.getElementById("mensaje-aviso");

const cleanClass = (aviso) => {
    aviso.classList.remove("bajar");
    aviso.classList.remove("invalido");
    aviso.classList.remove("valido");
};

inpEmail.addEventListener("keyup", () => {
    const email = inpEmail.value;

    cleanClass(emailAviso);

    if (!email) {
        emailAviso.innerHTML = "El email es obligatorio";
        emailAviso.classList.add("invalido");
    } else if (!emailIsValido(email)) {
        emailAviso.innerHTML = "Email inválido :(";
        emailAviso.classList.add("invalido");
    } else {
        emailAviso.innerHTML = "Email válido :D";
        emailAviso.classList.add("valido");
    }
    emailAviso.classList.add("bajar");
});

const renderValidacionSimple = (campo, aviso, campoName) => {
    cleanClass(aviso);

    if (!campo) {
        aviso.innerHTML = `El ${campoName} es obligatorio`;
        aviso.classList.add("invalido");
    } else {
        aviso.innerHTML = `${campoName} completado :D`;
        aviso.classList.add("valido");
    }
    aviso.classList.add("bajar");
};

inpNombre.addEventListener("keyup", () =>
    renderValidacionSimple(inpNombre.value, nombreAviso, "nombre")
);

inpMensaje.addEventListener("keyup", () =>
    renderValidacionSimple(inpMensaje.value, mensajeAviso, "mensaje")
);

send.addEventListener("click", (e) => {
    const email = inpEmail.value;
    const nombre = inpNombre.value;
    const mensaje = inpMensaje.value;

    const errors = validar({ email, nombre, mensaje });

    if (errors) {
        console.log("Hay errores: ", errors);

        if (errors.email) {
            console.log("ERROR EN EMAIL");
            cleanClass(emailAviso);

            emailAviso.classList.add("bajar");
            emailAviso.classList.add("invalido");
            emailAviso.innerHTML = errors.email;
        }
        if (errors.nombre) {
            cleanClass(nombreAviso);

            nombreAviso.classList.add("bajar");
            nombreAviso.classList.add("invalido");
            nombreAviso.innerHTML = errors.nombre;
        }
        if (errors.mensaje) {
            cleanClass(mensajeAviso);

            mensajeAviso.classList.add("bajar");
            mensajeAviso.classList.add("invalido");
            mensajeAviso.innerHTML = errors.mensaje;
        }
        e.preventDefault();
    } else {
        cleanClass(emailAviso);
        cleanClass(nombreAviso);
        cleanClass(mensajeAviso);
    }
});
