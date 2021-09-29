var db = [];
function agregarRegistro(){
    var nombre = document.getElementById('nombre').value;
    var genero = document.getElementById('genero').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    function Registro(nombre,genero,telefono,direccion,correo,contrasena){
        this.nombre = nombre;
        this.genero = genero;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.contrasena = contrasena;
    }
    var registro_usuario = new Registro(nombre,genero,telefono,direccion,correo,contrasena);
    db.push(registro_usuario);
    console.log(db);
}
module.exports = {agregarRegistro};


