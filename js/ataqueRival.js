let ataqueRival = []


//  function aleatorio(min, max){
//      return Math.floor(Math.random() * (max - min +1) + min)
//  }

function ataqueAleatorioRival(){
    let ataqueAleatorio  = aleatorio(0, ataquesMascotaRival.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueRival.push('FUEGO')
    }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueRival.push('AGUA')
    }else {
        ataqueRival.push('TIERRA')
}
console.log(ataqueRival)
iniciarCombate()
}


