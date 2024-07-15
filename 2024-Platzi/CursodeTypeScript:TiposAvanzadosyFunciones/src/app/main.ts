import {faker} from "@faker-js/faker"

import { addProduct, productos } from "./productos/producto.service";


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

console.log(productos)

