function iniciarCombate(){
    if(ataqueJugador.length == 5){
        // indexAmbosOponentes()
        combate()
    }
}

let indexAtaqueJugador
let indexAtaqueRival

function indexAmbosOponentes(jugador, rival){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueRival = ataqueRival[rival]
}

 let victoriasJugador = 0
 let victoriasRival = 0
 let spanVictoriasJugador = document.getElementById("vidas-jugador")
 let spanVictoriasRival = document.getElementById("vidas-rival")

function combate(){
    for(i=0; i < ataqueJugador.length; i++){
        // console.log(ataqueJugador[i])
        if(ataqueJugador[i] === ataqueRival[i]){
            indexAmbosOponentes(i, i)
            crearMensaje("EMPATE")
        }else if(ataqueJugador[i] === "FUEGO" && ataqueRival[i] === "TIERRA"){
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        }else if(ataqueJugador[i] == "AGUA" && ataqueRival[i] == "FUEGO"){
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        }else if(ataqueJugador[i] == "TIERRA" && ataqueRival[i] == "AGUA"){
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        }else{
            indexAmbosOponentes(i, i)            
            crearMensaje("PERDISTE")
            victoriasRival++
            spanVictoriasRival.innerHTML = victoriasRival
        }
        }
        revisarVictorias()
    }
            
function revisarVictorias(){
    if(victoriasJugador === victoriasRival){
        // alert("Ganaste")
        crearMensajeFinal("Esto fue un empate !!!")
     }else if(victoriasJugador > victoriasRival){
         // alert("Perdiste")
         crearMensajeFinal("Ganaste 🥳🥳 !!!")
     }else{
        crearMensajeFinal("Perdiste 😒😒 !!!")
     }
}

