let registros = [];

function agregarRegistro() {
    var nombre = document.getElementById('nombre').value;
    var genero = document.getElementById('genero').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    function Registro(nombre, genero, telefono, direccion, correo, contrasena) {
        this.nombre = nombre;
        this.genero = genero;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.contrasena = contrasena;
    }
    var registro_usuario = new Registro(nombre, genero, telefono, direccion, correo, contrasena);
    registros.push(registro_usuario);
    console.log(registros);
}
function ordenarArreglo(arreglo) {
    let  ordenar = arreglo.sort((a, b) => {
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
    });
    console.log(ordenar);
    return ordenar;
}

function filtrarCorreo(arreglo) {
    let arregloFiltrado = [];
    let filtrar = /@gmail.com/
    for (x = 0; x < arreglo.length; x++) {
        if (filtrar.test(arreglo[x].correo)) {
            arregloFiltrado.push(arreglo[x].correo);
        }

    }
    console.log(arregloFiltrado);
    return arregloFiltrado;
}
module.exports.registros = registros
module.exports.ordenarArreglo= ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
module.exports.filtrarCorreo = filtrarCorreo;




