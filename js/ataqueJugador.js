
let ataques

function extraerAtaque(mascotaJugador){ // Funcion almacena los ataques de las mascotas en la variable ataques
    
    for(let i=0; i < mascotas.length; i++){
        if(mascotaJugador === mascotas[i].nombre){ 
            ataques = mascotas[i].ataques 
        }
    }
   mostrarAtaques(ataques)
}

let contenedorAtaques = document.getElementById("containerAtaques")
let ataquesMascota
let botonFuego 
let botonAgua
let botonTierra
let botones = [] 


function mostrarAtaques(ataques){ //por cada ataque 
    ataques.forEach((ataque) => {
        ataquesMascota = `<button id=${ataque.id} class="btnAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += ataquesMascota
        } )
    botonFuego = document.getElementById("btn-fuego")
    botonAgua = document.getElementById("btn-agua")
    botonTierra = document.getElementById("btn-tierra")
    botones = document.querySelectorAll(".btnAtaque") //se seleccionan todos los botones mediante una clase
    // console.log(botones)
}

let ataqueJugador = []
function secuenciaAtaque(){ // se agrega  evento click a los botones
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            // console.log(e)
            if(e.target.textContent === "🔥" ) {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === "💧" ) {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else{
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioRival()
        })
    })
    
}
