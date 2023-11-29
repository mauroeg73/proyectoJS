
// crear una lista para futbol5, preguntar quien puede, y si no puede incluir otro jugador



const Jugador = function(nombre,posicion){
    this.nombre = nombre
    this.posicion = posicion
}

let jugador1 = new Jugador("martin","arquero")
let jugador2 = new Jugador("marco","defensa")
let jugador3 = new Jugador("agustin","medio campo")
let jugador4 = new Jugador("tobias","medio campo")
let jugador5 = new Jugador("facundo","delantero")




const equipo = [jugador1,jugador2,jugador3,jugador4,jugador5]


equipo.forEach(function(x) {
    let confirmacion = confirm(x.nombre + " podes jugar?");
    if(confirmacion == true){
        alert("perfecto contamos con vos")
        console.table(x)
    }
    else{
        crearJugador()
    }
    
    })

    function crearJugador(){
        let nombre = prompt("entonces quien puede ir?")
        let posicion = prompt("y de que juega?")
    
        if(nombre == null || nombre === "" || false || posicion == null || posicion === ""){
        alert("alguien tiene que ir, completa todos los datos por favor")
        return(crearJugador())

        }


    let jugador = new Jugador(nombre,posicion)
    console.table(jugador)
}
