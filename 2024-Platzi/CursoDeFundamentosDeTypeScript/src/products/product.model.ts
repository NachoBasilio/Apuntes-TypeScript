export type Tamaños = "S" | "M" | "L" | "XL"
export type Producto = {
  titulo: string,
  fecha: Date,
  stock: number,
  tamaño?: Tamaños
}
