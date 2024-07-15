import { Producto } from "./producto.model"
import { CreateProductDto } from "./producto.dto"
import { faker } from "@faker-js/faker"

export const productos: Producto[] = []

export const addProduct = (data: CreateProductDto) => {
  const nuevoProducto = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    categoria: {
      id: faker.string.uuid(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      nombre: faker.commerce.department()
    }
  }

  productos.push(nuevoProducto)
  return nuevoProducto
}


export const updateProduct = (id:string, changes: CreateProductDto) => {

}

export const deleteProduct = (id:string) => {

}

export const findOneProduct = (id:string) => {

}
