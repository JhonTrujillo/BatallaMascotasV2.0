let ataqueRival

function ataqueAleatorioRival(){
    let ataqueAleatorio  = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueRival = "FUEGO"
    }else if(ataqueAleatorio == 2){
        ataqueRival = "AGUA"
    }else {
        ataqueRival = "TIERRA"
}
combate()
}


