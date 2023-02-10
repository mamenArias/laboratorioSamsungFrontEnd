function validarNombre(){
    var nombre = document.getElementById('nombre');
    var errorNombre = document.getElementById('errorNombre');
    var pattern = new RegExp('^[A-Z]+$', 'i');

    if(nombre.value == 0){
        nombre.classList.remove("valido");
        nombre.classList.remove("iconoSuccess");
        errorNombre.innerHTML = "Rellene este campo";
        nombre.classList.add("invalido");
        nombre.classList.add("iconoError");
        return false;
    } else if (pattern.test(nombre.value)){
        errorNombre.innerHTML = "";
        nombre.classList.remove("invalido");
        nombre.classList.remove("iconoError");
        nombre.classList.add("valido");
        nombre.classList.add("iconoSuccess");
        return true;
    } else {
        nombre.classList.remove("valido");
        nombre.classList.remove("iconoSuccess");
        errorNombre.innerHTML = "Nombre inválido";
        nombre.classList.add("invalido");
        nombre.classList.add("iconoError");
        return false;
    }
}

function validarEmail(){
    var email = document.getElementById('email');
    var errorEmail = document.getElementById('errorEmail');

    if(email.value == 0){
        errorEmail.innerHTML = "Rellene este campo";
        email.classList.add("invalido");
        email.classList.add("iconoError");
        return false;
    }
}

function validarClave(){
    var clave = document.getElementById('clave');
    var errorClave = document.getElementById('errorClave');

    if(clave.value == 0){
        errorClave.innerHTML = "Rellene este campo";
        clave.classList.add("invalido");
        clave.classList.add("iconoError");
        return false;
    }
}

function validarClaveIgual(){
    var confirmarClave = document.getElementById('confirmarClave');
    var errorClaveIncorrecta = document.getElementById('errorClaveIncorrecta');

    if(confirmarClave.value == 0){
        errorClaveIncorrecta.innerHTML = "Rellene este campo";
        confirmarClave.classList.add("invalido");
        confirmarClave.classList.add("iconoError");
        return false;
    }
}