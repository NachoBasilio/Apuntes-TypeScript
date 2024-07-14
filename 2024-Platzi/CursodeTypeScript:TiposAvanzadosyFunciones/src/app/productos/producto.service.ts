import { Producto } from "./producto.model"

 export const productos: Producto[] = []

export const addProduct = (data: Producto) => {
    productos.push(data)
}
