export const createProduct = (
  id: string | number,
  isNew: boolean = true, // Con esto ya tenemos un valor por defecto
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew
  }
}


const producto1 = createProduct(1, false, 12)
const producto2 = createProduct(2)

console.log(producto2)
