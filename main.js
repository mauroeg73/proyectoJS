
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
    Swal.fire('Por favor, completa todos los campos del formulario.');
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
    Swal.fire("No hay jugadores almacenados.");
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



window.addEventListener('load', ()=> {
let lon
let lat

let tempvalor = document.getElementById('temp-valor')
let ubicacion = document.getElementById('ubicacion')
let icono = document.getElementById('icono')

// capturo ubicacion del usuario por medio de la geolocalizacion

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition( posicion =>{
    lon = posicion.coords.longitude
    lat = posicion.coords.latitude

// comienzo a consumir api de clima y utilizo librerias para mostar con iconos

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=33bf2110e869b369a7b65ff6c5d280e5&units=metric`

    fetch(url)
    .then(response => {return response.json()})
    .then( data => {
      let temp = Math.round (data.main.temp)
      tempvalor.textContent = `${temp} °C`
      console.log(data)

      ubicacion.textContent = data.name

      switch (data.weather[0].main){
        case 'Rain':
        icono.src = 'iconos/rainy-1.svg'
        console.log('lluvia');
        break;
      case 'Clear':
          icono.src = 'iconos/Day.svg'
          console.log('limpio');
          break;
      case 'Clouds':
          icono.src = 'iconos/cloudy.svg'
          console.log('nubes');
          break;
      case 'Night':
            icono.src = 'iconos/night.svg'
            console.log('nubes');
            break;    
      }
    })
    .catch(error => {
      console.log(error + "no se puede mostrar informacion")
    })

  })

}

})