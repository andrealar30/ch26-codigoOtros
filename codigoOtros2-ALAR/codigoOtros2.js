/* El codigo trata de hacer un formulario en el que se guarde 
la informacion y se puedan borrar personas si no confirman su asistencia 
asi como poner quienes son los invitados*/
// Se crea una lista de invitados.
// Los invitados pueden ser agregados a través de un formulario
// Se pueden borrar invitados de la lista usando el botón


const formulario = document.querySelector(".formulario"); //es una clase asi que se quita el # y se pone formulario


formulario.onsubmit = function(e) {

  e.preventDefault(); //
  //se colocan los puntos y comas y const
  const n = formulario.elements[0];
  const e = formulario.elements[1] ;
  const na = formulario.elements[2] ;

  const edad = e.value; 
  const nombre = n.value; 

  const i = na.selectedIndex; 
  const nacionalidad = na.options[i].value; 
  console.log(nombre, edad);//se colocan los puntos y comas
  console.log(nacionalidad);//se colocan los puntos y comas

  if (nombre.length === 0) {
    n.classList.add("error");//se colocan los puntos y comas
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error"); //se colocan los puntos y comas
  }

if (nombre.length > 0  && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);//se colocan los puntos y comas
  }
}
//se colocan los puntos y comas y const
const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
//se colocan los puntos y comas
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }
//const y punto y coma
const lista = document.getElementById("lista-de-invitados");

const elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); //se cambia a punto add
lista.appendChild(elementoLista);
//const y punto y coma
const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
const span = document.createElement("span");
const input = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;
elementoLista.appendChild(span);
elementoLista.appendChild(input);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

//puntos y comas
const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
 elementoLista.remove()
  };
}
//No jalo :c