function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado-batalla") //Selecionamos donde se inserta el mensaje
    sectionMensajes.innerHTML = resultado

    let ataqueDelJugador = document.getElementById("tarjeta-jugador") //Selecionamos donde se inserta el mensaje
    let parrafo = document.createElement('p')//Creamos elemento de tipo "p"
    parrafo.innerHTML = ataqueJugador //creamos el mensaje con js
    ataqueDelJugador.appendChild(parrafo) // insertamos el mensaje

    let ataqueDelRival = document.getElementById("tarjeta-rival") //Selecionamos la Section donde se inserta el mensaje
    let parrafo2 = document.createElement('p')//Creamos elemento de tipo "p"
    parrafo2.innerHTML = ataqueRival //creamos el mensaje con js
    ataqueDelRival.appendChild(parrafo2) // insertamos el mensaje
}

function crearMensajeFinal(resultadofinal){
    //desocultar boton reiniciar
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

    let sectionMensajes = document.getElementById("resultado-batalla") //Selecionamos donde se inserta el mensaje
    sectionMensajes.innerHTML = resultadofinal //creamos el mensaje con js
    
    let botonFuego = document.getElementById("btn-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("btn-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("btn-tierra")
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}