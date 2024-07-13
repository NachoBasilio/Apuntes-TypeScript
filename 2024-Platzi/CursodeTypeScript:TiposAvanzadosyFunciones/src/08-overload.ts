// Si le mando un string, esta funcion me va a devolver un array. Y tambien viceversa

//Asi lo hice yo
const functionQueTransforma = (arrayOrString: string | string[]):string | string[]=> {
  if(typeof arrayOrString === "string" ){
    return arrayOrString.split("")
  }else{
    return arrayOrString.join("")
  }
}

console.log(functionQueTransforma("Hola"))
console.log(functionQueTransforma(["N","a","c","h","o"]))


//Ahora con sobrecarga

function parseStr(input: string | string[]):string | string[]{
  if(Array.isArray(input) ){
    return input.join("")
  }else{
    return input.split("")
  }
}
const strAArr = parseStr("Hola")
const arryAStr = parseStr(["N","a","c","h","o"])

