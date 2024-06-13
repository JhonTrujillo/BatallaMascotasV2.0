let vidasJugador = 3
let vidasRival= 3

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasRival = document.getElementById("vidas-rival")

    if(ataqueRival == ataqueJugador){
        crearMensaje(" EMPATE")
     }else if(ataqueJugador == 'FUEGO' && ataqueRival == 'TIERRA'){
        crearMensaje(" GANASTE")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    }else if(ataqueJugador == "AGUA" && ataqueRival == "FUEGO"){
         crearMensaje(" GANASTE")
         vidasRival--
        spanVidasRival.innerHTML = vidasRival
     }else if(ataqueJugador == "TIERRA" && ataqueRival == "AGUA"){
        crearMensaje(" GANASTE")
        vidasRival--
        spanVidasRival.innerHTML = vidasRival
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasRival == 0){
        // alert("Ganaste")
        crearMensajeFinal("Ganaste !!!🥳🥳")
    }else if(vidasJugador == 0){
        // alert("Perdiste")
        crearMensajeFinal("Lo siento, Perdiste 😒")
    }
}

