function checkDir(event) {
  let key = event.keycode || event.which;
  let tecla = String.fromCharCode(key).toString();
  let direccion = document.getElementById("direccion").value;
  let letraespecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#-";
  
  if (letraespecial.indexOf(tecla) == -1 ) {
    alert("No puede ingresar este caracter: " + tecla);
    return false;
  }
  else if( direccion.length >= 50) {
    alert("Limite de caracteres: " + direccion.length);
    return false;
  }
  else{
    return true
  }
}
module.exports = checkDir;

//validación telefono por Renata
function checkTelefono(event) {
  let key = event.keycode || event.which;
  let tecla = String.fromCharCode(key).toString();
  let telefono = document.getElementById("telefono").value;
  let numeros = "0123456789";
  
  if (numeros.indexOf(tecla) == -1 ) {
    alert("Solo se admiten números: ");
    return false;
  }
  else if( telefono.length < 7) {
    alert("Los telefonos fijos deben tener exactamente 7 dígitos");
    return false;
  }
  else{
    return true
  }
}
module.exports = checkTelefono;




