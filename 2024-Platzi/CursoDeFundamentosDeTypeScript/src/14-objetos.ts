(()=>{
  type Tamaños = "S" | "M" | "L" | "XL"
  type Producto = {titulo: string, fecha: Date, stock: number, tamaño?: Tamaños}

  const login = ({email, password}: {email: string, password: string}) => {
    console.log(email, password)
  }

  login({
    email: "nachokpo@mgmail.com",
    password: "123aa"
  })

  const createProductToJSON = ({titulo, fecha, stock, tamaño}:Producto
  ):Producto => {
    return {
      titulo,
      fecha,
      stock,
      tamaño
    }
  }

  const producto1 = createProductToJSON({titulo:"P1", fecha:new Date(), stock:20, tamaño:"S"})
  console.log(producto1)

})()
