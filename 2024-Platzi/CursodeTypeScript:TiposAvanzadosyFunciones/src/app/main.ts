import {faker} from "@faker-js/faker"

import { addProduct, findProducts, productos, updateProduct } from "./productos/producto.service";


for (let i = 0; i < 50; i++) {
  addProduct({
    titulo: faker.commerce.productName(),
    categoryId: faker.string.uuid(),
    stock: faker.number.int(),
    imagen: faker.image.url(),
    color: faker.color.human(),
    descripcion: faker.commerce.productDescription(),
    precio: parseInt(faker.commerce.price()),
    esNuevo: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    tamaño: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
  });
}

const producto = productos[0]

const datosActualizados = updateProduct(producto.id, {
  titulo: "Nuevo titulo",
  stock: 40
})

console.log(datosActualizados)



findProducts({
  stock: 10,
  color: 'red',
  tags: ["dadsa", "dasds"]
})
