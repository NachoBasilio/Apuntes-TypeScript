import { Producto } from "./producto.model"
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./producto.dto"
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


export const updateProduct = (id:Producto["id"], changes: UpdateProductDto): Producto => {//Asi siempre va a respetar el tipo
  const index = productos.findIndex(item => item.id === id)

  const prevData = productos[index]

  productos[index] = {
    ...prevData,
    ...changes
  }

  return productos[index]
}

export const deleteProduct = (id:string) => {

}

export const findOneProduct = (id:string) => {

}

export const findProducts = (dto: FindProductDto): Producto[] => {

  //Code
  //Aqui dentro deberiamos respetar los parametros de busqueda, por ende todo lo que llegue tiene que ser readonly

  // dto.tags?.push("asasd")//Me deja si no es readOnly
  return productos
}

