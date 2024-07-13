//Ahora con sobrecarga
export function parseStr(input: string):string[]
export function parseStr(input: string[]):string
//Con estas dos lineas "sobre cargamos" y queda claro que pasa cuando entra una cosa o la otra va a retornar x o y cuestion.

export function parseStr(input: unknown):unknown{
  if(Array.isArray(input) ){
    return input.join("")
  }else if(typeof input === "string"){
    return input.split("")
  }else{
    return -1
  }
}
const strAArr = parseStr("Hola")
const arryAStr = parseStr(["N","a","c","h","o"])
