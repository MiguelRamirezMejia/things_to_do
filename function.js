//MAIN

var bPrimeraTarea = true;
init();

//FUNCTIONS

function init () {
  var btnSave = document.querySelector('#btnGuardar');
  var btnCat = document.querySelector('#btnCrear');
  btnSave.onclick = creaTarea;
  btnCat.onclick = creaCategoria;
}

function creaTarea (){
  this.id = 'patito';

  // captura de la fecha del input de nueva categoria
  var fechaIngresada = document.querySelector('#agregaFecha');
  console.log(fechaIngresada.value);

  // captura del texto del input de nueva tarea
  var tareaIngresada = document.querySelector('#agregaTarea');
  var fechaAgregada = document.querySelector('#agregaFecha');

  if (tareaIngresada.value == '') {
    alert('No ha ingresado ningún texto');
  } else {
    console.log('La tarea ingresada es: '+tareaIngresada.value+'. '+fechaAgregada.value);
    var descripcion = ' '+tareaIngresada.value+'. '+fechaAgregada.value+'.';

    var ulTarea = document.querySelectorAll('.creaList')[1].children[1];

    var lista = document.createElement('li');
    ulTarea.appendChild(lista);

    var liTarea = document.querySelectorAll('.creaList')[1].children[1].lastElementChild;

    var checkButton = document.createElement('input');

    liTarea.appendChild(checkButton);

    checkButton.type = 'checkbox';
    checkButton.className = 'checkbox';
    checkButton.onclick = tacharTarea;
    checkButton.onclick = function(){
      tacharTarea(this);
    };	
    lista.class = 'checkbox';

    var nuevoTxt = document.createTextNode(descripcion);

    liTarea.appendChild(nuevoTxt);

    if(bPrimeraTarea){
      var botonLimpiar = document.createElement('button');
      var posicionBoton = document.querySelector('#ulPrincipal').parentNode;

      posicionBoton.appendChild(botonLimpiar);
      botonLimpiar.id = 'btnLimpiar';
      botonLimpiar.type = 'button';
      var txtBoton = document.createTextNode('Limpiar');
      botonLimpiar.appendChild(txtBoton);
      bPrimeraTarea = false;

      botonLimpiar.onclick = limpiarTareas;
    }
  }
}

function tacharTarea(pCheckbox){
  if(pCheckbox.checked){
    pCheckbox.parentNode.className = 'tachado';	
  } else {
    pCheckbox.parentNode.className = '';
  }
}

function limpiarTareas(){
  var tareasLimpiar = document.querySelectorAll('.tachado');
  for (var i = 0; i < tareasLimpiar.length; i++) {
    tareasLimpiar[i].parentNode.removeChild(tareasLimpiar[i]);
  }
}

function creaCategoria () {
  var nombreCat = document.querySelector('#agregaCategoria');
  alert (nombreCat.value);
}