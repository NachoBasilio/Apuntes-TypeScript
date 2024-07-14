import { addProduct } from "./productos/producto.service";

addProduct(
  {
    id: 1,
    title: "Producto numero 1",
    createdAt: new Date(),
    updatedAt: new Date(),
    stock: 90,
    categoria: {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      nombre: "Pokemon"
    }
  }
)
