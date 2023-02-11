function validarNombre(){
    var nombre = document.getElementById('nombre');
    var errorNombre = document.getElementById('errorNombre');
    var pattern = /^[A-Z ]+$/i;

    if (nombre.value == 0){
        nombre.classList.remove("iconoSuccess");
        errorNombre.innerHTML = "Rellene este campo";
        nombre.classList.add("invalido");
        nombre.classList.add("iconoError");
        return false;
    } else if (!pattern.test(nombre.value)){
        errorNombre.innerHTML = "Nombre inválido";
        nombre.classList.add("invalido");
        nombre.classList.remove("iconoSuccess");
        nombre.classList.add("iconoError");
        return false;
    } else {
        errorNombre.innerHTML= "";
        nombre.classList.remove("invalido");
        nombre.classList.remove("iconoError");
        nombre.classList.add("valido");
        nombre.classList.add("iconoSuccess");
        return true;
    }
}

function validarEmail(){
    var email = document.getElementById('email');
    var errorEmail = document.getElementById('errorEmail');
    var validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(email.value == 0){
        email.classList.remove("iconoSuccess");
        errorEmail.innerHTML = "Rellene este campo";
        email.classList.add("invalido");
        email.classList.add("iconoError");
        return false;
    } else if (validarEmail.test(email.value)){
        errorEmail.innerHTML = "";
        email.classList.remove("invalido");
        email.classList.remove("iconoError");
        email.classList.add("iconoSuccess");
        email.classList.add("valido");
        return true;
    } else {
        email.classList.remove("iconoSuccess");
        errorEmail.innerHTML = "Email inválido";
        email.classList.add("invalido");
        email.classList.add("iconoError");
        return false;
    }
}

function validarClave(){
    var clave = document.getElementById('clave');
    var errorClave = document.getElementById('errorClave');

    if(clave.value == 0){
        clave.classList.remove("iconoSuccess");
        errorClave.innerHTML = "Rellene este campo";
        clave.classList.add("invalido");
        clave.classList.add("iconoError");
        return false;
    } else if (clave.value.length > 8){
        clave.classList.remove("iconoSuccess");
        errorClave.innerHTML = "No debe tener más de 8 caracteres";
        clave.classList.add("invalido");
        clave.classList.add("iconoError");
        return false;
    } else {
        clave.classList.remove("invalido");
        clave.classList.remove("iconoError");
        errorClave.innerHTML = "";
        clave.classList.add("valido");
        clave.classList.add("iconoSuccess");
        return true;
    }
}

function validarClaveIgual(){
    var clave = document.getElementById('clave');
    var confirmarClave = document.getElementById('confirmarClave');
    var errorClaveIncorrecta = document.getElementById('errorClaveIncorrecta');

    if(confirmarClave.value == 0){
        confirmarClave.classList.remove("iconoSuccess");
        errorClaveIncorrecta.innerHTML = "Rellene este campo";
        confirmarClave.classList.add("invalido");
        confirmarClave.classList.add("iconoError");
        return false;
    } else if (confirmarClave.value === clave.value){
        confirmarClave.classList.remove("invalido");
        confirmarClave.classList.remove("iconoError");
        errorClaveIncorrecta.innerHTML = "";
        confirmarClave.classList.add("valido");
        confirmarClave.classList.add("iconoSuccess");
        return true;
    } else {
        confirmarClave.classList.remove("iconoSuccess");
        errorClaveIncorrecta.innerHTML = "Las contraseñas no coinciden";
        confirmarClave.classList.add("invalido");
        confirmarClave.classList.add("iconoError");
        return false;
    }
}

function validarFormulario(){
    if (validarNombre() && validarEmail() && validarClave() && validarClaveIgual()){
        window.alert("La inscripción ha sido correcta");
        return true;
    } else {
        return false;
    }
}