function capturar() {
    //console.log('capturado');
    function Persona(nombre, edad, color) {
        this.nombre=nombre;
        this.edad=edad;
        this.color=color;
    }
    let nombreCapturar = document.getElementById('nombre').value;
    //console.log(nombreCapturar);
    let edadCapturar = document.getElementById('edad').value;
    //console.log(edadCapturar);
    let colorCapturar = document.getElementById('color').value;
    console.log(colorCapturar);

    nuevoSujeto = new Persona(nombreCapturar, edadCapturar, colorCapturar);
    console.log(nuevoSujeto);
    agregar();

  


}

var baseDatos = [];
function agregar() {
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById('tabla').innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td><td class = "color" >'+nuevoSujeto.color+'</td></tbody>'
    document.getElementsByClassName("color").style.color = "red";
}

