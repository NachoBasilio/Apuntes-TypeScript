type persona = {nombre : string, numero: number,casado: boolean }

let string : string = "Hola, soy Nacho!"
let numeros : number | null = 56
let booleano : boolean = true
let arrayDeNumeros : (number | string)[] = [2,3,4]
let objetoPersona : persona = {
  nombre: "Nacho",
  numero: 2342,
  casado: true
}

function saludar(saludo:string):string{
  return saludo
}

saludar("hola a todos")


arrayDeNumeros.push("Hola")

