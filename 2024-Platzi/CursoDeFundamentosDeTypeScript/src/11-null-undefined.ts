(()=>{
  //let miNumero: number = undefined //Esto no se puede hacer en TS
  //let miString: string = null //Esto no se puede hacer en TS
  // let miNull = null //Esto es de tipo any
  // let miUndefined = undefined //Esto es de tipo any
  let miNull: null = null //Esto es de tipo null
  let miUndefined: undefined = undefined //Esto es de tipo undefined

  let miNumero: number | null = null
  miNumero = 34

  let miString: string | undefined = undefined
  miString = "34"

  function hola(name: string | null) {
    let hi = "Hola "
    if(name){
      hi += name
    }else{
      hi += "Nadie"
    }
    console.log(hi)
  }

  function holav2(name: string | null) {
    let hi = "Hola "
    hi += name?.toLocaleLowerCase() || "Nadie"
    console.log(hi)
  }


  holav2(null)
  holav2("Nacho")
})()
