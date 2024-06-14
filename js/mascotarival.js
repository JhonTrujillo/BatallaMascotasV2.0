function seleccionarMascotaRival(){
    let mascotaAleatorio = aleatorio(0, mascotas.length -1)
    let spanMascotaRival = document.getElementById("mascota-rival") // Creamos variable para guardar seleccion del Span donde se insertara nuevo valor
    
    spanMascotaRival.innerHTML= mascotas[mascotaAleatorio].nombre
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}