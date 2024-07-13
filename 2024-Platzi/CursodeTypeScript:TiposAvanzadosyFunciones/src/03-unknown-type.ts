let anyVar: any;
anyVar = true
anyVar = undefined
anyVar = 1
anyVar = null
anyVar = []
anyVar = {}

let isNew: boolean = anyVar //NO SALTA ERROR, es muy peligroso el any.


let unknowVar: unknown;
unknowVar = true
unknowVar = undefined
unknowVar = 1
unknowVar = null
unknowVar = []
unknowVar = {}


if( typeof unknowVar === "string"){//Si de alguna manera establecemos que esta variable es de x tipo, podemos acceder comodamente a sus propiedades y metodos. Es como any pero "inteligente"
  unknowVar.toLocaleUpperCase()
}


// let isNew2: boolean = unknowVar //Si salta error!

if( typeof unknowVar === "boolean"){
  let isNew2: boolean = unknowVar //Aca me aseguro que sea del tipo que necesito
}

const parse = (str: string): unknown =>{//Como no se si el parse va a funcionar bien, podes usar unknown en lugar de any
  return JSON.parse(str)
}



