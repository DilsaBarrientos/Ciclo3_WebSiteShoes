function checkNombre(nombre) {
    let caracteresP = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (nombre.length >= 4 && nombre.length <= 30) {
        return true;
    } else {
        for (var i = 0; i < nombre.length; i++) {
            if (caracteresP.indexOf(nombre[i]) == -1) {
                alert("No se permiten carecteres numericos");
                return false;
            }
        }
    }
    alert("el tamaño del campo debe ser minimo 4 maximo 30 caracteres");
    return false;
}

function checkGenero(genero) {
    if (!genero) {
        alert("Debe seleccionar una opcion de genero");
        return false;
    } else {
        return true;
    }
}

function checkTelefono(telefono) {
    let numeros = "0123456789";

    if (telefono.length == "" || telefono.length != 7) {
        alert("Vacio o Limite de caracteres: ");
        return false;
    } else {
        for (var i = 0; i < telefono.length; i++) {
            if (numeros.indexOf(telefono[i]) == -1) {
                alert("Solo se permiten numeros ");
                return false;
            }
        }
    }
    return true;
}

function checkDir(direccion) {
    var letraespecial =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#-";

    if (direccion.length == "" || direccion.length > 51) {
        alert("Vacio o Limite de caracteres: " + direccion.length);
        return false;
    } else {
        for (var i = 0; i < direccion.length; i++) {
            if (letraespecial.indexOf(direccion[i]) == -1) {
                alert("Solo se permiten los caracteres: #- ");
                return false;
            } else {
                return true;
            }
        }
    }
}

function checkCorreo(correoDato) {
    const eCorreo = /[a-zA-Z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]/;
    if (correoDato.length == "") {
        alert("El campo esta vacio");
        return false;
    } else {
        if (eCorreo.test(correoDato)) {
            return true;
        } else {
            alert("El correo digitado es invalido");
            return false;
        }
    }
}

function checkContrasena(valor) {
    if (valor.length == 0) {
        alert("El campo contraseña no debe estar vacio ");
        //return false;
    } else {
        if (valor.length < 8) {
            alert("La contraseña necesita minimo 8 digitos");
        }

        if (valor.search(/[a-z]/) < 0) {
            alert("La contraseña necesita al menos una letra minuscula.");
        }
        if (valor.search(/[A-Z]/) < 0) {
            alert("La contraseña necesita al menos una letra mayuscula.");
        }
        if (valor.search(/[0-9]/) < 0) {
            alert("La contraseña necesita al menos un numero.");
        }
    }
    if (
        valor.length < 8 ||
        valor.search(/[a-z]/) < 0 ||
        valor.search(/[A-Z]/) < 0 ||
        valor.search(/[0-9]/) < 0 ||
        valor.length == 0
    ) {
        console.log("algunos campos que no cumplen las politicas de validacion");
        return false;
    } else {
        return true;
    }
}
module.exports = {
    checkNombre,
    checkGenero,
    checkTelefono,
    checkDir,
    checkCorreo,
    checkContrasena,
};
