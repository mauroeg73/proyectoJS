
//  que el usuario cree la lista,
//  almacenar la lista en local Storage,
//  devolver la ultima lista almacenada,
//  limpiar formulario


  document.getElementById('agregarBtn').addEventListener('click', agregarJugador);
  document.getElementById('traerBtn').addEventListener('click', traerUltimosResultados);
  document.getElementById('limpiarBtn').addEventListener('click', limpiarFormulario);

function agregarJugador() {
  
  let nombre = document.getElementById('nombre').value;
  let posicion = document.getElementById('posicion').value;
  let contacto = document.getElementById('contacto').value;

  if (nombre && posicion && contacto) {
    let lista = JSON.parse(localStorage.getItem('listaResultados')) || [];

    if (lista.length < 5) {
      lista.push(`Nombre: ${nombre}, Posición: ${posicion}, Contacto: ${contacto}`);
      localStorage.setItem('listaResultados', JSON.stringify(lista));

      mostrarResultadosActuales();
    } else {
      alert('se completo el equipo con exito');
    }
  } else {
    alert('Por favor, completa todos los campos del formulario.');
  }
}

function traerUltimosResultados() {
  let listaGuardada = localStorage.getItem('listaResultados');

  if (listaGuardada) {
    let lista = JSON.parse(listaGuardada);
    let listaDOM = document.getElementById('resultado-lista');
    listaDOM.innerHTML = '';

    lista.forEach(function (elemento) {
      let nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = elemento;
      listaDOM.appendChild(nuevoElemento);
    });
  } else {
    alert('No hay jugadores almacenados.');
  }
}

  function limpiarFormulario() {
  document.getElementById('miFormulario').reset();

  localStorage.removeItem('listaResultados');
  document.getElementById('resultado-lista').innerHTML = '';
}

  function mostrarResultadosActuales() {
  let listaGuardada = localStorage.getItem('listaResultados');

  if (listaGuardada) {
    let lista = JSON.parse(listaGuardada);
    let listaDOM = document.getElementById('resultado-lista');
    listaDOM.innerHTML = '';

    lista.forEach(function (elemento) {
      let nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = elemento;
      listaDOM.appendChild(nuevoElemento);
    });
  }
}