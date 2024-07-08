(()=>{

  type Tamaños = "S" | "M" | "L" | "XL"


  // function createProductToJSON(
  //   titulo: string,
  //   fecha: Date,
  //   stock: number,
  //   tamaño: Tamaños
  // ){
  //   return {
  //     titulo,
  //     fecha,
  //     stock,
  //     tamaño
  //   }
  // }


  const createProductToJSON = (
    titulo: string,
    fecha: Date,
    stock: number,
    tamaño?: Tamaños //Valor opcional
  )=>{
    return {
      titulo,
      fecha,
      stock,
      tamaño
    }
  }

  const producto1 = createProductToJSON("P1", new Date(), 20, "S")
  console.log(producto1)
})()
