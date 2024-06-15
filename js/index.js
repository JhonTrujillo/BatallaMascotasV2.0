let opcionMascotas


function iniciarJuego(){

    //oculta menu de ataque
    let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    //Ocultar menu boton reiniciar
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"


    // Manipulamos el Dom con interador para llamar las mascotas
    mascotas.forEach((mascota) => {
        opcionMascotas = `
        <input type="radio" id=${mascota.nombre} name="mascota">
        <label class="tarjeta-mascota" for="${mascota.nombre}">
            <p>${mascota.nombre}</p>
            <img src=${mascota.foto} alt=${mascota.nombre}>
        </label>
        `
        let contenedorTarjetas = document.getElementById("container-tarjetas") //Seleccionamos donde se renderiza el html
        contenedorTarjetas.innerHTML += opcionMascotas // insertamos el html con .innerhtml la estructura esta guardada en opcionMascota
    })

    let btnMascotaJugador = document.getElementById("btn-selecionar-mascota") //creamos una variable y Selecionamos el boton del html por su id 
    btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador)    //a la variable estipulamos el evento click y la funcion a ejecutar

    let botonReinciar = document.getElementById("btn-reiniciar")
    botonReinciar.addEventListener("click", reiniciarJuego)
}

let mascotaJugador
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
        spanMascotaJugador.innerHTML = inputSquirtle.id //.innerHTML inserta el nuevo valor a la etiqueta Span mascota-jugador
        mascotaJugador = inputSquirtle.id // creamos variable mascotaJugador para almacenar el id de la mascota
    }else if(inputBulbasaur.checked){
        spanMascotaJugador.innerHTML = inputBulbasaur.id
        mascotaJugador = inputBulbasaur.id
    }else if(inputSharmander.checked){
        spanMascotaJugador.innerHTML = inputSharmander.id
        mascotaJugador = inputSharmander.id
    }else{
        alert("Selecciona a una Mascota")
    }

    extraerAtaque(mascotaJugador)
    seleccionarMascotaRival() // despues de seleccionar nuestra mascota llamamos la funcion seleccionarMascotaRival
}
window.addEventListener("load", iniciarJuego)//Se crea evento de carga de html