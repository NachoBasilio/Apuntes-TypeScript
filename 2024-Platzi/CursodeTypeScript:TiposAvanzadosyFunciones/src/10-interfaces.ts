type Sizes = "S" | "M" | "L" | "XL"
// type Producto = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes
// }

//Type vs Interface
//Con Type puedo definir tipos primitivos o directos (como decir string | number, osea en una linea), en el caso de interface no se puede, si o si tiene que tener todo el cuerpo. Se usa para conjuntos de valores.
//Las interfaces se pueden extender, los types NO.

interface Producto {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes
}

interface ProductoGame extends Producto {
  pgi: number;
}

const productos : ProductoGame[] = []

productos.push({
  id: "1",
  title: "producto 1",
  createdAt: new Date(),
  stock:2,
  pgi: 18
})
