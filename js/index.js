function iniciarJuego(){
    //oculta menu de ataque
    let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    //Ocultar menu boton reiniciar
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let btnMascotaJugador = document.getElementById("btn-selecionar-mascota") //creamos una variable y Selecionamos el boton del html por su id 
    btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador)    //a la variable estipulamos el evento click y la funcion a ejecutar

    let botonFuego = document.getElementById("btn-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("btn-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("btn-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReinciar = document.getElementById("btn-reiniciar")
    botonReinciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    // Desocultar Menu de ataque
    let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    // ocultar Seccion mascota
    let sectionSeleccionarMascota = document.getElementById("selecionar-mascota")
    sectionSeleccionarMascota.style.display = "none"


    let inputSquirtle = document.getElementById("squirtle")
    let inputBulbasaur = document.getElementById("bulbasaur")
    let inputSharmander = document.getElementById("sharmander")
    let spanMascotaJugador = document.getElementById("mascota-jugador") // Creamos variable para guardar seleccion del Span donde se insertara nuevo valor
        
    if(inputSquirtle.checked){
        spanMascotaJugador.innerHTML = "Squirtle" //.innerHTML inserta el nuevo valor a la etiqueta Span mascota-jugador
    }else if(inputBulbasaur.checked){
        spanMascotaJugador.innerHTML = "Bulbasaur"
    }else if(inputSharmander.checked){
        spanMascotaJugador.innerHTML = "Sharmander"
    }else{
        alert("Selecciona a una Mascota")
    }
    seleccionarMascotaRival() // despues de seleccionar nuestra mascota llamamos la funcion seleccionarMascotaRival
}

//Opcion 1 no recomendada selecionarMascotaJugador
// function seleccionarMascotaJugador(){
//     if (document.getElementById("squirtle").checked){
//         alert("selecionaste a squiler")
//     } else if(document.getElementById("bulbasaur").checked){
//         alert("selecionaste a Bulbasaur")
//     } else if(document.getElementById("sharmander").checked){
//         alert("selecionaste a Sharmander")
//     }else {
//         alert("Selecciona una mascota")
//     }
// }


window.addEventListener("load", iniciarJuego)//Se crea evento de carga de html