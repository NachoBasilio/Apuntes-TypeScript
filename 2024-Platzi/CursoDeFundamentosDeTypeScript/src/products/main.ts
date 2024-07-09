import { agregadoraDeProductos, products, calcStock } from "./product.service"

agregadoraDeProductos({
  titulo: "Pikachu",
  fecha: new Date(),
  stock: 45
})

agregadoraDeProductos({
  titulo: "Remera de pokemon",
  fecha: new Date(),
  stock: 5,
  tamaño: "M"
})

agregadoraDeProductos({
  titulo: "Remera de Dragon Ball",
  fecha: new Date(),
  stock: 52,
  tamaño: "S"
})


console.log(products)
console.log(calcStock())
