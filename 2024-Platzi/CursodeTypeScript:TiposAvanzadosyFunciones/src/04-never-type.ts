const withutEnd = () => {
  while(true){
    console.log("Aguante river plate")
  }
}

const fail = (mensaje:string) => {
  throw new Error(mensaje)
}


const ejemplo = (input: unknown) => {
  if ( typeof input === "string"){
    return "es un string"
  } else if (Array.isArray(input)) {
    return "es un array"
  }

  return fail("no match")
}

console.log(ejemplo("hola"))
console.log(ejemplo(["hola array"]))
console.log(ejemplo(23312))
console.log(ejemplo("Despues del fail"))

//Entonces, el never se pasa cuando:
// 1- hay un bucle infinito
// 2- el programa se detiene en esa funcion
