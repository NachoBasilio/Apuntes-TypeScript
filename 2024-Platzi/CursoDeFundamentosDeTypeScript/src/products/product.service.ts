import { Producto } from "./product.model"

export const products: Producto[] = []

export const agregadoraDeProductos = (data: Producto)=>{
  products.push(data)
}

export const calcStock = (): number =>{
  let total = 0

  total = products.reduce((acc, act) => {
    return acc + act.stock
  }, 0)

  return total
}
