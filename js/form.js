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




