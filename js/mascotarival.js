function seleccionarMascotaRival(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaRival = document.getElementById("mascota-rival") // Creamos variable para guardar seleccion del Span donde se insertara nuevo valor
    if( mascotaAleatorio == 1){
        spanMascotaRival.innerHTML = "Squirtle" //.innerHTML inserta el nuevo valor a la etiqueta Span mascota-rival
    } else if(mascotaAleatorio == 2){
        spanMascotaRival.innerHTML = "Bulbasaur"
    }else if(mascotaAleatorio == 3){
        spanMascotaRival.innerHTML = "Sharmander"
    } 
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}