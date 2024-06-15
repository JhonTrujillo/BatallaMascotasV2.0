function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado-batalla") //Selecionamos donde se inserta el mensaje
    sectionMensajes.innerHTML = resultado

     let ataqueDelJugador = document.getElementById("tarjeta-jugador") //Selecionamos donde se inserta el mensaje
     let ataqueDelRival = document.getElementById("tarjeta-rival") //Selecionamos la Section donde se inserta el mensaje
    
    let NuevoAtaqueDelJugador = document.createElement('p')//Creamos elemento de tipo "p"
    let NuevoAtaqueDelRival = document.createElement('p')//Creamos elemento de tipo "p"

    NuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador //creamos el mensaje con js
    NuevoAtaqueDelRival.innerHTML = indexAtaqueRival //creamos el mensaje con js

    ataqueDelJugador.appendChild(NuevoAtaqueDelJugador) // insertamos el mensaje
    ataqueDelRival.appendChild(NuevoAtaqueDelRival) // insertamos el mensaje
 
}

function crearMensajeFinal(resultadofinal){
    //desocultar boton reiniciar
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    let sectionMensajes = document.getElementById("resultado-batalla") //Selecionamos donde se inserta el mensaje
    sectionMensajes.innerHTML = resultadofinal //creamos el mensaje con js
    
    }

function reiniciarJuego(){
    location.reload()
}