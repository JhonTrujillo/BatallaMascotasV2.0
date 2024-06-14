//3. creamos variable el arregle "array"
let mascotas = [] 

// 1. creamos la clase mascota
class Mascota{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []//5. creamos arreglo ataques
    }
}

// 2. Creamos los objetos de la clase mascota
let squirtle = new Mascota("squirtle", './img/squirtle.png', 5)
let bulbasaur = new Mascota("bulbasaur", './img/bulbasaur.png', 5)
let sharmander = new Mascota("sharmander", './img/sharmander.png', 5)

//4. llamamos la variable y con .push agregamos los objetos al arreglo
// mascotas.push(squirtle,bulbasaur,sharmander) 

//6. llamamos el objeto con . selecionamos elemento ataque y con .push agregamos el ataque al arreglo
squirtle.ataques.push(
    {nombre: "💧", id:"btn-agua"},
    {nombre: "💧", id:"btn-agua"},
    {nombre: "💧", id:"btn-agua"},
    {nombre: "🔥", id:"btn-fuego"},
    {nombre: "☘️", id:"btn-tierra"}
)

bulbasaur.ataques.push(
    {nombre: "☘️", id:"btn-tierra"},
    {nombre: "☘️", id:"btn-tierra"},
    {nombre: "☘️", id:"btn-tierra"},
    {nombre: "💧", id:"btn-agua"},
    {nombre: "🔥", id:"btn-fuego"}
)

sharmander.ataques.push(
    {nombre: "🔥", id:"btn-fuego"},
    {nombre: "🔥", id:"btn-fuego"},
    {nombre: "🔥", id:"btn-fuego"},
    {nombre: "💧", id:"btn-agua"},
    {nombre: "☘️", id:"btn-tierra"}
)

//6. llamamos la variable y con .push agregamos los objetos al arreglo
mascotas.push(squirtle,bulbasaur,sharmander) 
