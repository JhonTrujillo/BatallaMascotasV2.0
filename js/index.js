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

let ataques
function extraerAtaque(mascotaJugador){
    
    for(let i=0; i < mascotas.length; i++){
        if(mascotaJugador === mascotas[i].nombre){
            ataques = mascotas[i].ataques
        }
    }
   mostrarAtaques(ataques)
}

let contenedorAtaques = document.getElementById("containerAtaques")
let ataquesMascota

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMascota = `
        <button id=${ataque.id} >${ataque.nombre}
        </button>
        `
        contenedorAtaques.innerHTML += ataquesMascota
        } )
        let botonFuego = document.getElementById("btn-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("btn-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("btn-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

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