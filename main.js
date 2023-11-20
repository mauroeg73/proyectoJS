
// crear una lista para futbol5, preguntar quien puede, y si no puede incluir otro jugador

const equipo = ["martin","marco","agustin","tobias","facundo"]


equipo.forEach(function(x) {
    let confirmacion = confirm(x + " podes jugar?");
    if(confirmacion == true){
        alert("perfecto contamos con vos")
    }
    else{
        let jugadorNuevo = prompt("entonces quien puede ir? ")
        console.log (jugadorNuevo)
    }
    
    })
